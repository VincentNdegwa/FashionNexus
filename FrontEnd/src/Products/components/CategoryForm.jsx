import React from "react";

function CategoryForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <h2>Filter By Category</h2>

      <div className="input-item">
        <input
          type="checkbox"
          name="Tshirt"
          checked={props.selectedCategory === "Tshirt"}
          onChange={props.handleCategory}
        />
        <h3>Tshirts</h3>
      </div>
      <div className="input-item">
        <input
          type="checkbox"
          name="Short"
          checked={props.selectedCategory === "Short"}
          onChange={props.handleCategory}
        />
        <h3>Shorts</h3>
      </div>
      <div className="input-item">
        <input
          type="checkbox"
          name="dress"
          checked={props.selectedCategory === "dress"}
          onChange={props.handleCategory}
        />
        <h3>Dress</h3>
      </div>
      <div className="input-item">
        <input
          type="checkbox"
          name="Suit"
          checked={props.selectedCategory === "Suit"}
          onChange={props.handleCategory}
        />
        <h3>Suites</h3>
      </div>
      <div className="input-item">
        <input
          type="checkbox"
          name="Shoes"
          checked={props.selectedCategory === "Shoes"}
          onChange={props.handleCategory}
        />
        <h3>Shoes</h3>
      </div>
    </form>
  );
}

export default CategoryForm;
