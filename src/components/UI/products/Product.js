import React from "react";
import classes from "./styles/Product.module.css"

const Product = (props) => {
  return (
    <div className={classes.product_div}>
      <img className={classes.image} src={props.img} alt="" />
      <h1 className={classes.title}>{props.title}</h1>
      <p>Rating: {props.rating}</p>
      <span>{props.price}</span>
    </div>
  );
};

export default Product;
