import React from "react";
import "../../styles/Shoes.css";
import { MdArrowForwardIos } from "react-icons/md";

function Shoes(props) {
  const [data, setData] = React.useState(props.shoesData);
  return (
    <div className="Shoes">
      <div className="shoes-container">
        <div className="shoes-header">
          <h1>Comfort and Style in Every Step</h1>
        </div>

        <div className="shoes-item item1">
          <div className="shoes-item-description">
            <h1>Elevate Your Style with Official Fashion Shoes</h1>
            <p>
              Discover our collection of official fashion shoes designed to add
              sophistication and elegance to your professional attire
            </p>
            <h3 className="see-all">
              See All <MdArrowForwardIos />
            </h3>
          </div>
          {data.length > 0 && (
            <div className="shoes-display-holder">
              <div className="shoes-display">
                <img src="/male-shoes.jpg" alt="male shoes" />
              </div>
              <div className="shoes-display">
                <img src="/male-shoes.jpg" alt="male shoes" />
              </div>
            </div>
          )}
        </div>

        <div className="shoes-item item2">
          <div className="shoes-item-description">
            <h1>Unleash Your Style with Fashion Sneakers Shoes</h1>
            <p>
              Explore our trendy and eclectic range of sneakers that are perfect
              for expressing your individuality and making a fashion statement.
            </p>
            <h3 className="see-all">
              See All <MdArrowForwardIos />
            </h3>
          </div>

          {data.length > 0 && (
            <div className="shoes-display-holder">
              <div className="shoes-display">
                <img src="/kids-shoes.jpg" alt="kids shoes" />
              </div>
              <div className="shoes-display">
                <img src="/kids2-shoes.webp" alt="kids shoes" />
              </div>
            </div>
          )}
        </div>
        {/* //// */}
      </div>
    </div>
  );
}

export default Shoes;
