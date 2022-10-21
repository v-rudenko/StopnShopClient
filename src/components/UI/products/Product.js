import React from "react";
import DeleteItem from "../../../api/DeleteItem";
import GetItem from "../../../api/GetItem";
import classes from "./styles/Product.module.css"

const Product = (props) => {
  const onItemClicked = () => {
    GetItem(props.id);
  }
  const ProductDeleteHandler = (event) => {
    event.stopPropagation();
    DeleteItem(props.id);
    console.log("Продукт видалено!")
  }
  return (
    <div onClick={onItemClicked} className={classes.product_div}>
      <img className={classes.image} src={props.img} alt="" />
      <h1 className={classes.title}>{props.title}</h1>
      <p>Rating: {props.rating}</p>
      <span>{props.price}</span>
      <button onClick={ProductDeleteHandler}>Delete</button>
    </div>
  );
};

export default Product;
