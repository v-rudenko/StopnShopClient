import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles/Product.module.css";
import CartButton from "./CartButton";

const Product = (props) => {

  const addItemHandler = () => {
    console.log(props.item);
  };

  return (
    <div className={classes.product_div}>
      <Link to={`/product/${props.id}`}>
        <div className={classes.image_div}><img className={classes.image} src={props.img} alt="" /></div>
      </Link>
      <Link className={classes.link} to={`/product/${props.id}`}><p className={classes.title}>{props.title}</p></Link>
      <p>Rating: {props.rating}</p>
      <span>{props.price} $</span>
      <CartButton onClick={addItemHandler} className={classes.button}></CartButton>
      
    </div>
  );
};

export default Product;
