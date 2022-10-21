import React from "react";
import classes from "./styles/Product.module.css"

const Product = (props) => {
  const onItemClicked = () => {
    console.log(props.id);
  }
  return (
    <div onClick={onItemClicked} className={classes.product_div}>
      <img className={classes.image} src={props.img} alt="" />
      <h1 className={classes.title}>{props.title}</h1>
      <p>Rating: {props.rating}</p>
      <span>{props.price}</span>
      <button>Delete</button>
    </div>
  );
};

export default Product;
