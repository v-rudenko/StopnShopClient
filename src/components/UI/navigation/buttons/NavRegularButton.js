import React from 'react'
import classes from "./styles/RegularButton.module.css"

const NavRegularButton = (props) => {
  return (

      <button className={classes.regular_button} onClick={props.onClick}>{props.children}</button>

  );
}

export default NavRegularButton