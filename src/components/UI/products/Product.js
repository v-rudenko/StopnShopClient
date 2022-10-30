import React from "react";
import { Link } from "react-router-dom";
import DeleteItem from "../../../api/DeleteItem";
import GetItem from "../../../api/GetItem";
import classes from "./styles/Product.module.css";
import cartImg from "./images/button_cart.png"

const Product = (props) => {

  return (
    <div className={classes.product_div}>
      <Link to={`/product/${props.id}`}>
        <div className={classes.image_div}><img className={classes.image} src={props.img} alt="" /></div>
      </Link>
      <p className={classes.title}>{props.title}</p>
      <p>Rating: {props.rating}</p>
      <span>{props.price} $</span>
      <button className={classes.button}><img draggable='false' src={cartImg} height="24px" /></button>
      
    </div>
  );
};

export default Product;
