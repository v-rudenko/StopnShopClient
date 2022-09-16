import React from "react";
import "./LoginForm.css";
import PasswordField from "./PasswordField";

const api = "http://localhost:3000/server/login.json";

const LoginForm = props => {
  async function Auth() {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    return data
  }

  const LoginSubmitHandler = async (event) => {
    event.preventDefault();
    const apiData = await Auth();
    console.log(apiData);
    localStorage.setItem("IsLoggedIn", "1");
    localStorage.setItem("token", apiData.token);
    localStorage.setItem("refresh", apiData.refresh);
    props.onLoginSuccess();
    console.log(event)
    // console.log(event)
  };

  return (
    <div>
      <form value='bob' onSubmit={LoginSubmitHandler} action="">
        <div className="login_form_centring_div">
          <div className="login_form_sizing_div">
            <div className="logo_div">
              <label className="logo s">S</label>
              <label className="logo amp">&</label>
              <label className="logo sec_s">S</label>
            </div>
            <div className="login_text">Log in to Stop & Shop</div>
            <label>Email</label>
            <input className="login_input_field" type="email" />
            <label>Password</label>
            <PasswordField />
            <button value='' type="submit" className="btn btn-primary">
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
