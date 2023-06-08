import "./App.css";
import Products from "./Products/Products";
// import Home from "./Home/Home";
import Home from "./Home/Home.jsx";
import Header from "./Home/components/Header";
// import Footer from "./Home/components/Footer";

import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [femaleData, setFemaleData] = React.useState([]);
  const [maleData, setMaleData] = React.useState([]);
  const [categoryData, setcategoryData] = React.useState([]);
  const [shoesData, setShoesData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/v1/data");
        const newData = await response.json();
        setData(newData);
        const filteredData = newData.filter(
          (item) => item.target === "all" || item.target === "female"
        );
        setFemaleData(filteredData);
        const uniqueData = newData.filter(
          (item) => item.target === "male" || item.target === "all"
        );
        setMaleData(uniqueData);
        const Tshirt = newData.find((item) => item.category === "Tshirt");
        const Short = newData.find((item) => item.category === "Short");
        const Hoodie = newData.find((item) => item.category === "Hoodie");
        const Suit = newData.find((item) => item.category === "Suit");
        setcategoryData([Tshirt, Suit, Short, Hoodie, newData[0]]);
        const Shoes = newData.filter((item) => item.category === "Shoes");
        setShoesData(Shoes);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <div className="loader-page">
      <div className="loader-page__content">
        <h1>Loading please wait........</h1>
      </div>
    </div>
  ) : (
    <div>
      <Header>
        <Header />
      </Header>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              femaleData={femaleData}
              maleData={maleData}
              categoryData={categoryData}
              shoesData={shoesData}
            />
          }
        />

        <Route
          path="/Products"
          element={<Products loading={loading} data={data} />}
        />
      </Routes>
      {/* <div className="my-footer">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
