import React from 'react'
import classes from "./styles/AuthError.module.css"

const AuthError = props => {
  return (
    <div className={classes.alert_div}>{props.children}</div>
  )
}

export default AuthError