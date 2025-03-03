import React, { useState, useEffect } from "react";
import { getMenuItems, createOrder } from "../services/api";
import MenuItem from "../components/MenuItem";
import Cart from "../components/Cart";

const Home = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await getMenuItems();
      setMenuItems(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching menu items:", error);
      setLoading(false);
    }
  };

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const checkout = async () => {
    try {
      // In a real app, you'd get the userId from auth context
      const userId = 1; // Use the sample user ID from our data.sql

      // Calculate total price
      const totalAmount = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      // Create order object
      const orderData = {
        userId: userId,
        totalAmount: totalAmount,
        status: "PENDING",
        items: cartItems.map((item) => ({
          menuItemId: item.id,
          quantity: item.quantity,
        })),
      };

      // Send to backend
      await createOrder(orderData);

      alert("Order placed successfully!");
      setCartItems([]);
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-container">
      <div className="menu-container">
        <h1>Menu</h1>
        <div className="menu-items">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          checkout={checkout}
        />
      </div>
    </div>
  );
};

export default Home;
