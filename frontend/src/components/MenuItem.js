import React from "react";

const MenuItem = ({ item, addToCart }) => {
  return (
    <div className="menu-item">
      <div className="menu-item-image">
        <img
          src={item.imageUrl || "https://via.placeholder.com/150"}
          alt={item.name}
        />
      </div>
      <div className="menu-item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="menu-item-footer">
          <span className="price">${item.price}</span>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
