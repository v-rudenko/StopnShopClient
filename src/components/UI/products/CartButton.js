import React from "react";
import cartImg from "./images/button_cart.png";

const CartButton = (props) => {
  return (
    <button className={props.className}>
      <img draggable="false" src={cartImg} height="24px" />
      {props.children}
    </button>
  );
};

export default CartButton;
