import React from "react";
import "./LoginForm.css";
import PasswordField from "./PasswordField";
import { useTranslation } from "react-i18next";

import classes from "./styles/LoginForm.module.css";
import closeIcon from "./styles/images/icon-close.svg";

const api = "http://localhost:8000/api/token";

const LoginForm = (props) => {
  const { t, i18n } = useTranslation("common");

  async function getToken(username, password) {
    const response = await fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
    const data = await response.json();
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
      alert("Wrong Login or Password!");
    }
  };

  const hideFormHandler = () => {
    props.onHideForm();
  };


  return (
    <div>
      <form value="bob" onSubmit={LoginSubmitHandler} action="">
        <div className={classes.form_centring_div}>
          <div className={classes.backdrop} onClick={hideFormHandler}></div>
          <div className={classes.form_sizing_div}>
            <div className={classes.close}>
              <img
                onClick={hideFormHandler}
                src={closeIcon}
                width="24px"
                height="24px"
              />
            </div>
            <div className="logo_div">
              <div className={classes.logo_inner_div}>
                <label className="logo s">S</label>
                <label className="logo amp">&</label>
                <label className="logo sec_s">S</label>
              </div>
            </div>
            <div className="login_text">
              {t("form.login.title", { service: "Stop & Shop" })}
            </div>
            <label>{t("form.login.email")}</label>
            <input className="login_input_field" type="text" />
            <label>{t("form.login.password")}</label>
            <PasswordField />
            <button value="" type="submit" className={`btn btn-primary ${classes.submit_button}`}>
              {t("form.login.log_in")}
            </button>
            <div className={classes.afterword}>{t("form.login.afterword.text", { service: "Stop & Shop" })} <a onClick={() => {props.toRegister()}} href="#">{t("form.login.afterword.link")}</a></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
