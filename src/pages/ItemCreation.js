import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./styles/ItemCreation.module.css"
import { useTranslation } from "react-i18next";

const ItemCreation = () => {
  const creationEndpoint = "http://127.0.0.1:8000/item/";
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("common");
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
    CreateItem(name, description, rating, price, photo);
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={creationSubmitHandler} action="">
        <label htmlFor="">{t("item_creation.title")}</label>
        <input name="name" type="text" />
        <label htmlFor="">{t("item_creation.description")}</label>
        <textarea name="description" id="" cols="30" rows="10"></textarea>
        <label htmlFor="">{t("item_creation.rating")}</label>
        <input name="rating" type="number" />
        <label htmlFor="">{t("item_creation.price")}</label>
        <input name="price" type="number" step="0.01" />
        <label htmlFor="">{t("item_creation.photo")}</label>
        <input name="photo" type="url" />
        <button type="submit">{t("item_creation.submit_button")}</button>
      </form>
    </div>
  );
};

export default ItemCreation;
