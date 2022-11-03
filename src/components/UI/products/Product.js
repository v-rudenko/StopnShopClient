import React from "react";
import { Link } from "react-router-dom";
import DeleteItem from "../../../api/DeleteItem";
import GetItem from "../../../api/GetItem";
import classes from "./styles/Product.module.css";
import CartButton from "./CartButton";

const Product = (props) => {

  return (
    <div className={classes.product_div}>
      <Link to={`/product/${props.id}`}>
        <div className={classes.image_div}><img className={classes.image} src={props.img} alt="" /></div>
      </Link>
      <Link className={classes.link} to={`/product/${props.id}`}><p className={classes.title}>{props.title}</p></Link>
      <p>Rating: {props.rating}</p>
      <span>{props.price} $</span>
      <CartButton className={classes.button}></CartButton>
      
    </div>
  );
};

export default Product;
