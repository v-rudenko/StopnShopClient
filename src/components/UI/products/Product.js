import React from "react";
import { Link } from "react-router-dom";
import DeleteItem from "../../../api/DeleteItem";
import GetItem from "../../../api/GetItem";
import classes from "./styles/Product.module.css";

const Product = (props) => {

  return (
    <div className={classes.product_div}>
      <Link to={`/product/${props.id}`}>
        <img className={classes.image} src={props.img} alt="" />
      </Link>
      <p className={classes.title}>{props.title}</p>
      <p>Rating: {props.rating}</p>
      <span>{props.price} $</span>
      <button className={classes.button}>Cart</button>
      
    </div>
  );
};

export default Product;
