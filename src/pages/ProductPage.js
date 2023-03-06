import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import GetItem from "../api/GetItem";
import UpdateItem from "../api/UpdateItem";
import DeleteItem from "../api/DeleteItem";
import classes from "./styles/ProductPage.module.scss";

const ProductPage = () => {
  const [updateMode, setUpdateMode] = useState(false);
  const params = useParams();
  const [item, setItem] = useState({});

  const navigate = useNavigate();

  const updateHandler = () => {
    setUpdateMode(true);
  };
  const saveHandler = (event) => {
    event.preventDefault();
    const ItemName = event.target["name"].value;
    const ItemDescription = event.target["description"].value;
    const ItemImageurl = event.target["imageurl"].value;
    const ItemRating = event.target["rating"].value;
    const ItemPrice = event.target["price"].value;
    UpdateItem(
      params.productId,
      ItemName,
      ItemDescription,
      ItemRating,
      ItemPrice,
      ItemImageurl
    );
    alert("Item Saved!");
  };

  const ProductDeleteHandler = (event) => {
    event.stopPropagation();
    DeleteItem(params.productId);
    console.log("Продукт видалено!");
    navigate("/");
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
        {/* There will be product with ID: {params.productId} */}
        <div className={classes.wrapper_product}>
          <header className={classes.product_header}>
            <h1>Title: {item.name}</h1>
            <p>rating: {item.rating}</p>
          </header>
          <img className={classes.photo} src={item.imageurl} alt="some image" />
          <p>description: {item.description}</p>
          <span>price: {item.price}</span>
          <button>Buy Item</button>
          <button onClick={updateHandler}>Update</button>
          <button onClick={ProductDeleteHandler}>Delete</button>
        </div>
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
          <input
            name="imageurl"
            type="url"
            defaultValue={item.imageurl}
          ></input>
          <h3>Rating:</h3>
          <input
            name="rating"
            type="number"
            step="0.1"
            defaultValue={item.rating}
          ></input>
          <h3>Price</h3>
          <input
            name="price"
            type="number"
            step="0.01"
            defaultValue={item.price}
          ></input>
          <button type="submit">Save</button>
        </form>
      </section>
    );
  }
};

export default ProductPage;
