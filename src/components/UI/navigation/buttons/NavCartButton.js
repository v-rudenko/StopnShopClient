import React, { useState } from 'react'
import cartImg from "../../products/images/button_cart.png"
import classes from "./styles/NavCartButton.module.css"

const NavCartButton = (props) => {
  
  const clickHandler = () => {
    // setShowCart(true);
  }

  return (
    <button onClick={clickHandler} className={classes.button}>
      <img draggable="false" src={cartImg} height="24px" />
      <span>2</span>
    </button>
  );
}

export default NavCartButton