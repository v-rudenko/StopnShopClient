import React from "react";
import "./LoginForm.css";
import PasswordField from "./PasswordField";

const api = "http://localhost:8000/api/token";

const LoginForm = (props) => {
  async function getToken(username, password) {
    const response = await fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
    // console.log("Response:", response);
    const data = await response.json();
    // console.log("Status:", data);
    return {
      data: data,
      status: response.status,
    };
  }

  const LoginSubmitHandler = async (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;

    const result = await getToken(username, password);

    if (result.status === 200) {
      localStorage.setItem("IsLoggedIn", "1");
      localStorage.setItem("token", result.data.access);
      localStorage.setItem("refresh", result.data.refresh);

      props.onLoginSuccess();
    } else if (result.status === 401) {
      alert("Wrong Login or Password!")
    }
  };

  return (
    <div>
      <form value="bob" onSubmit={LoginSubmitHandler} action="">
        <div className="login_form_centring_div">
          <div className="login_form_sizing_div">
            <div className="logo_div">
              <label className="logo s">S</label>
              <label className="logo amp">&</label>
              <label className="logo sec_s">S</label>
            </div>
            <div className="login_text">Log in to Stop & Shop</div>
            <label>Email</label>
            <input className="login_input_field" type="text" />
            <label>Password</label>
            <PasswordField />
            <button value="" type="submit" className="btn btn-primary">
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
