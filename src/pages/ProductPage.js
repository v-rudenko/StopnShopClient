import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GetItem from "../api/GetItem";
import UpdateItem from "../api/UpdateItem"

const ProductPage = () => {
  const [updateMode, setUpdateMode] = useState(false);
  const params = useParams();
  const [item, setItem] = useState({});

  const updateHandler = () => {
    setUpdateMode(true);
  };
  const saveHandler = (event) => {
    event.preventDefault();
    const ItemName = event.target["name"].value
    const ItemDescription = event.target["description"].value
    const ItemImageurl = event.target["imageurl"].value
    const ItemRating = event.target["rating"].value
    const ItemPrice = event.target["price"].value
    UpdateItem(params.productId, ItemName, ItemDescription, ItemRating, ItemPrice, ItemImageurl);
    alert("Item Saved!");
  };

  useEffect(() => {
    async function FetchData() {
      setItem(await GetItem(params.productId));
    }
    FetchData();
  }, []);
  if (updateMode === false) {
    return (
      <section>
        There will be product with ID: {params.productId}
        <h1>Title: {item.name}</h1>
        <p>description: {item.description}</p>
        <img src={item.imageurl} alt="some image" />
        <p>rating: {item.rating}</p>
        <span>price: {item.price}</span>
        <button>Buy Item</button>
        <button onClick={updateHandler}>Update</button>
        <button>Delete</button>
      </section>
    );
  } else {
    return (
      <section>
        <form onSubmit={saveHandler}>
          There will be product with ID: {params.productId}
          <h3>Name:</h3>
          <input name="name" defaultValue={item.name}></input>
          <h3>Description:</h3>
          <input name="description" defaultValue={item.description}></input>
          <h3>Image:</h3>
          <input name="imageurl" type="url" defaultValue={item.imageurl}></input>
          <h3>Rating:</h3>
          <input name="rating" type="number" defaultValue={item.rating}></input>
          <h3>Price</h3>
          <input name="price" type="number" defaultValue={item.price}></input>
          <button type="submit">Save</button>
        </form>
      </section>
    );
  }
};

export default ProductPage;
