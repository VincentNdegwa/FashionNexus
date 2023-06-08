import React, { useState, useEffect } from "react";
import "../styles/Forms.css";
import CategoryForm from "./CategoryForm";
import GenderForm from "./GenderForm";
import PriceForm from "./PriceForm";

function Forms(props) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedGender, setSelectedGender] = React.useState(null);
  const [selectPrice, setSelectedPrice] = React.useState(null);
  const [priceValue, setPriceValue] = React.useState();

  const handleCategory = (event) => {
    setSelectedCategory(event.target.name);
  };
  const handleGender = (event) => {
    setSelectedGender(event.target.name);
  };
  const handlePrice = (event) => {
    if (event.target.value === "lt") {
      setPriceValue("lt");
    } else {
      setPriceValue("gt");
    }

    setSelectedPrice(event.target.name);
  };
  //useEffect for category filter
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `/api/v1/data/Products?category=${selectedCategory}`
      );
      const product = await res.json();
      setFilteredData(product.data);
    };

    fetchData();
  }, [selectedCategory]);
  // useEffect for gender filter
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/v1/data/Products?target=${selectedGender}`);
      const product = await res.json();
      setFilteredData(product.data);
    };

    fetchData();
  }, [selectedGender]);

  // useEffect for price filter
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/data/products?price=${selectPrice}&priceValue=${priceValue}`
      );
      const product = await res.json();
      if (product.data.length < 1) {
        props.setDataIsNull(true);
      }
      setFilteredData(product.data);
    };
    fetchData();
  }, [selectPrice, priceValue]);
  // end of filters
  useEffect(() => {
    console.log(props);
    if (filteredData?.length > 0) {
      props.updateData(filteredData, false);
    } else {
      props.updateData(filteredData, true);
    }
  }, [filteredData]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="product-filter">
      <CategoryForm
        handleSubmit={handleSubmit}
        handleCategory={handleCategory}
        selectedCategory={selectedCategory}
      />
      <GenderForm
        handleSubmit={handleSubmit}
        handleGender={handleGender}
        selectedGender={selectedGender}
      />
      <PriceForm
        handleSubmit={handleSubmit}
        handlePrice={handlePrice}
        selectPrice={selectPrice}
      />
    </div>
  );
}

export default Forms;
