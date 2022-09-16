import React from "react";
import "./LoginForm.css";
import PasswordField from "./PasswordField";

const RegisterForm = () => {

  async function Auth() {
    const response = await fetch("http://localhost:3000/server.txt");
    const text = await response.text();
    console.log(text);
  }

  const LoginSubmitHandler = (event) => {
    event.preventDefault();
    Auth()
    // console.log(event)
  };

  return (
    <div>
      <form onSubmit={LoginSubmitHandler} action="">
        <div className="login_form_centring_div">
          <div className="login_form_sizing_div">
            <div className="logo_div">
              <label className="logo s">S</label>
              <label className="logo amp">&</label>
              <label className="logo sec_s">S</label>
            </div>
            <div className="login_text">Register on Stop & Shop</div>
            <label>Username</label>
            <input required className="login_input_field" type="text" />
            <label>Email</label>
            <input required className="login_input_field" type="text" />
            <label>Password</label>
            <PasswordField/>
            <label>Confirm Password</label>
            <PasswordField/>
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
