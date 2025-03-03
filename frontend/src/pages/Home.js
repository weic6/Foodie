import React, { useState, useEffect } from "react";
import { getMenuItems } from "../services/api";
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

  const checkout = () => {
    // This would typically make an API call to create an order
    // For now, we'll just clear the cart and show an alert
    alert("Order placed successfully!");
    setCartItems([]);
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
