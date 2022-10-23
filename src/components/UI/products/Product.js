import React from "react";
import { Link } from "react-router-dom";
import DeleteItem from "../../../api/DeleteItem";
import GetItem from "../../../api/GetItem";
import classes from "./styles/Product.module.css";

const Product = (props) => {
  const ProductDeleteHandler = (event) => {
    event.stopPropagation();
    DeleteItem(props.id);
    console.log("Продукт видалено!");
  };
  return (
    <div className={classes.product_div}>
      <Link to={`/product/${props.id}`}>
        <img className={classes.image} src={props.img} alt="" />
      </Link>
      <h1 className={classes.title}>{props.title}</h1>
      <p>Rating: {props.rating}</p>
      <span>{props.price}</span>
      <button onClick={ProductDeleteHandler}>Delete</button>
    </div>
  );
};

export default Product;
