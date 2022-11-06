import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";
import CloseButton from "../navigation/buttons/CloseButton";
import classes from "./styles/CartItem.module.css";

const CartItem = (props) => {

  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(cartActions.increment(props.id));
  }
  const decrementHandler = () => {
    dispatch(cartActions.decrement(props.id));
  }
  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(props.id));
    // console.log(props.name);
  }

  return (
    <div className={classes.item_div}>
      <CloseButton onClick={removeItemHandler} className={classes.close} />
      <div className={classes.photo_div}>
        <img src={props.image} alt="" />
        <div className={classes.content_div}>
          <h6>{props.name}</h6>
          <div className={classes.bottom_div}>
            <span>{props.price}$</span>
            <div className={classes.buttons}>
              <span onClick={decrementHandler}>-</span>
              <span>{props.quantity}</span>
              <span onClick={incrementHandler}>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
