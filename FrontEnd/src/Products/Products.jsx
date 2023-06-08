import React, { useState } from "react";
import Forms from "./components/Forms";
import "./styles/Products.css";
import NoProduct from "./components/NoProduct";
// import NoProduct from "./components/NoProduct";
function Products() {
  const [data, setData] = React.useState();
  const [dataIsNull, setDataIsNull] = useState(false);

  const updateData = (filteredData, nullData) => {
    console.log("setting update..");
    setData(filteredData);
    setDataIsNull(nullData);
    console.log(dataIsNull);
  };

  return (
    <div className="Products">
      <div className="products-container">
        <Forms updateData={updateData} setDataIsNull={setDataIsNull} />

        {dataIsNull ? (
          <h1>No products found</h1>
        ) : (
          <div className="products-main-display">
            {data?.length > 0 &&
              data.map((item, i) => {
                return (
                  <div className="products-card" key={i}>
                    <div className="product-image">
                      <img src={item.img} alt="product" />
                    </div>
                    <div className="product-details">
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
