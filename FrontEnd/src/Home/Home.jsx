import React from "react";
import Hero from "./components/Hero";
import Essential from "./components/Essential";
import Men from "./components/Men";
import Clothes from "./components/Clothes";
import Shoes from "./components/Shoes";

function Home(props) {
  return (
    <div className="App">
      <div className="hero-section">
        <Hero />
      </div>

      <section>
        <Essential femaleData={props.femaleData} />
        <Men maleData={props.maleData} />
        <Clothes categoryData={props.categoryData} />
        <Shoes shoesData={props.shoesData} />
      </section>
    </div>
  );
}

export default Home;
