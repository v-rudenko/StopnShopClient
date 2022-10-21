import React from "react";
import classes from "./styles/ItemCreation.module.css"

const ItemCreation = () => {
  const creationEndpoint = "http://127.0.0.1:8000/item/";
  const CreateItem = async (name, description, rating, price, photo) => {
    const response = await fetch(creationEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        rating: rating,
        price: price,
        imageurl: photo,
      }),
    });
    const data = await response.json();
    return {
      data: data,
      status: response.status,
    };
  };

  const creationSubmitHandler = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const rating = event.target.rating.value;
    const photo = event.target.photo.value;
    CreateItem(name, description, price, rating, photo);
  };

  return (
    <div>
      <form onSubmit={creationSubmitHandler} action="">
        <label htmlFor="">Name</label>
        <input name="name" type="text" />
        <label htmlFor="">Description</label>
        <textarea name="description" id="" cols="30" rows="10"></textarea>
        <label htmlFor="">Rating</label>
        <input name="rating" type="number" />
        <label htmlFor="">Price</label>
        <input name="price" type="number" step="0.01" />
        <label htmlFor="">Photo</label>
        <input name="photo" type="url" />
        <button type="submit">Create item</button>
      </form>
    </div>
  );
};

export default ItemCreation;
