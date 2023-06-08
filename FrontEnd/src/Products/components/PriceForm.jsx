import React from "react";

function PriceForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <h2>Filter by price</h2>
      <div className="input-item">
        <input
          type="checkbox"
          name="201"
          value="gt"
          checked={props.selectPrice === "201"}
          onChange={props.handlePrice}
        />
        <h3>greater than 200</h3>
      </div>

      <div className="input-item">
        <input
          type="checkbox"
          name="200"
          value="lt"
          checked={props.selectPrice === "200"}
          onChange={props.handlePrice}
        />
        <h3>less than 200</h3>
      </div>
    </form>
  );
}

export default PriceForm;
