import React from "react";
// import "../styles/Header.css";'
import "../../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div className="header-container">
        <div className="header-logo">
          <h2>FashionNexus</h2>
          <img src="/logo.png" alt="logo" />
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/Products">Products</Link>
          <Link to="/">Cart</Link>
          <Link to="/">login</Link>
          <Link to="/">Register</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
