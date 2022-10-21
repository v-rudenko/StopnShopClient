import React, { useState } from "react";
import showIcon from "../images/show-password.svg";
import hideIcon from "../images/hide-password.svg";
import classes from "./styles/PasswordField.module.css"

const PasswordField = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(showIcon);

  const TogglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon(hideIcon);
    } else {
      setPasswordType("password");
      setPasswordIcon(showIcon);
    }
  };

  return (
    <div>
      <div className={classes.password_field_div}>
        <input required className={classes.input_field} type={passwordType} />
        <button type="button" onClick={TogglePassword}>
          <img src={passwordIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
