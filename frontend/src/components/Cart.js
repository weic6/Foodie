import React from "react";

const Cart = ({ cartItems, removeFromCart, checkout }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
          <button className="checkout-button" onClick={checkout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
