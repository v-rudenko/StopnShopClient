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

  // return (
  //   <div className="row">
  //     <div className="col"><img src={props.image} alt="" /></div>
  //     <div className="col">baboon 2</div>
  //     <div className="col"> baboon 3</div>
  //   </div>
  // )

  return (
    <div className={classes.item_div}>
      <CloseButton onClick={removeItemHandler} className={classes.close} />
      <div className={classes.photo_div}>
        <img src={props.image} alt="" />
        <div className={classes.content_div}>
          <p className={classes.title}>{props.name}</p>
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
