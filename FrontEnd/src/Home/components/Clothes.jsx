import React from "react";
import "../../styles/Clothes.css";
import { MdArrowForwardIos } from "react-icons/md";

function Clothes(props) {
  const [data, setData] = React.useState(props.categoryData);

  return (
    <div className="Clothes">
      <div className="clothes-header">
        <h1>Elegant and Sophisticated Eveningwear for Special Occasions</h1>
        <div className="header-description">
          <p>
            Discover exquisite eveningwear options that exude elegance and
            sophistication, perfect for formal events and special occasions
            where you want to leave a lasting impression.
          </p>

          <h1>
            See All <MdArrowForwardIos />
          </h1>
        </div>
      </div>
      {/* <div className="clothes-container">{clothesItem()}</div> */}
      <div className="clothes-container">
        {data.length > 0 &&
          data.map((item, i) => {
            return (
              <div className={`clothes-item card${i}`} key={i}>
                <div className="item-card">
                  <img src={item.img} alt="clothes" />
                  <div className="item-details">
                    <h1>{item.price}</h1>
                    <p>{item.category}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Clothes;
