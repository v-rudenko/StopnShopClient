import React, { useState } from "react";
import "./PasswordField.css";
import showIcon from "../images/show-password.svg";
import hideIcon from "../images/hide-password.svg";
// import "./LoginForm.css"

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
      <div className="password_field_div">
        <input required className="login_input_field" type={passwordType} />
        <button type="button" onClick={TogglePassword}>
          <img src={passwordIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
