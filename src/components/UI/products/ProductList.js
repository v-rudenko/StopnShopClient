import React, { useState, useEffect } from "react";
import Product from "./Product";
import classes from "./styles/ProductList.module.css";

const ProductsList = (props) => {
  const api = "http://127.0.0.1:8000/item/list/";

  const [items, setItems] = useState([]);
  const displayedItems = [];

  useEffect(() => {
    async function getItems() {
      const response = await fetch(api);
      const data = await response.json();
      // console.log(data);
      setItems(data);
      // return data;
    }
    getItems();
  }, []);
  
  items.map((item) => {
    displayedItems.push(
      <Product
        key={item.id}              // ID там поки немає
        img={item.imageurl}
        rating={item.rating}
        price={item.price}
        title={item.name}
      />
    );
  });

  return (
    <>
      <h1>Our Products</h1>
      <div className={classes.all_products_div}>{displayedItems}</div>
    </>
  );
};

export default ProductsList;
