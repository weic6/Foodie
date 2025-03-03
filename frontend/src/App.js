import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import OrdersHistory from "./pages/OrdersHistory";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Foodie</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Menu</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<OrdersHistory />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>&copy; 2023 Foodie. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
