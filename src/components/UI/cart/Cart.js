import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";
import Backdrop from "../helpers/Backdrop";
import classes from "./styles/Cart.module.css";

const Cart = () => {
  
  const dispatch = useDispatch();
  

  const hideCartHandler = () => {
    dispatch(cartActions.hide());
  }

  return (
    <>
      <Backdrop onClick={hideCartHandler} />
      <div className={classes.cart}>
        <h1>Cart</h1>
      </div>
    </>
  );
};

export default Cart;
