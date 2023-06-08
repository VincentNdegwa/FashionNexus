import React from "react";
import "../../styles/Hero.css";

function Hero() {
  return (
    <div className="Hero" id="Hero">
      <div className="hero-holder">
        <h1>
          Your Fashion Adventure Starts Here. Explore the Latest Trends and
          Timeless Classics
        </h1>
        <div className="hero-btns">
          <button>
            <a href="#Products">View Product</a>
          </button>
          <button>Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
