import React from 'react'
import classes from "./style/Backdrop.module.css"

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick}>{props.children}</div>
  )
}

export default Backdrop