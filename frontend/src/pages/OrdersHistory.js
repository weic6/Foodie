import React, { useState, useEffect } from "react";
import { getOrdersByUserId } from "../services/api";

const OrdersHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you'd get the userId from auth context
    const userId = 1;
    fetchOrders(userId);
  }, []);

  const fetchOrders = async (userId) => {
    try {
      const response = await getOrdersByUserId(userId);
      setOrders(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="orders-history">
      <h1>Order History</h1>
      {orders.length === 0 ? (
        <p>You haven't placed any orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <h3>Order #{order.id}</h3>
                <span>Date: {new Date(order.createdAt).toLocaleString()}</span>
                <span>Status: {order.status}</span>
                <span>Total: ${order.totalAmount.toFixed(2)}</span>
              </div>
              <div className="order-items">
                <h4>Items:</h4>
                <ul>
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.menuItemName} x {item.quantity} - $
                      {item.price.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersHistory;
