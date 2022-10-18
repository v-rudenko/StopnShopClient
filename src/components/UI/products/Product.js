import React from "react";
import classes from "./styles/Product.module.css"

const Product = (props) => {
  return (
    <div onClick={props.onItemClicked} className={classes.product_div}>
      <img className={classes.image} src={props.img} alt="" />
      <h1 className={classes.title}>{props.title}</h1>
      <p>Rating: {props.rating}</p>
      <span>{props.price}</span>
      <button>Delete</button>
    </div>
  );
};

export default Product;
