import React from 'react'
import { cartActions } from '../../../../store/cart';
import cartImg from "../../products/images/button_cart.png"
import classes from "./styles/NavCartButton.module.css"
import { useDispatch, useSelector } from 'react-redux';

const NavCartButton = (props) => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.cart.counter)
  
  const clickHandler = () => {
    dispatch(cartActions.show());
  }

  return (
    <button onClick={clickHandler} className={classes.button}>
      <img draggable="false" src={cartImg} height="24px" />
      <span>{counter}</span>
    </button>
  );
}

export default NavCartButton