import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";
import Backdrop from "../helpers/Backdrop";
import CloseButton from "../navigation/buttons/CloseButton";
import CartItem from "./CartItem";
import classes from "./styles/Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();

  const hideCartHandler = () => {
    dispatch(cartActions.hide());
  };

  return (
    <>
      <Backdrop onClick={hideCartHandler} />
      <div className={classes.cart}>
        <header>
          <h3>Cart</h3>
          <CloseButton onClick={hideCartHandler} className={classes.close} />
        </header>
        <main>
          <CartItem />
        </main>
      </div>
    </>
  );
};

export default Cart;
