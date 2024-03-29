import React, { useState } from "react";
import "./LoginForm.css";
import PasswordField from "./PasswordField";
import { useTranslation } from "react-i18next";
import AuthError from "./AuthError";

import classes from "./styles/LoginForm.module.css";
import closeIcon from "./styles/images/icon-close.svg";

const api = "http://127.0.0.1:8000/account/api/token/";

const LoginForm = (props) => {
  const { t, i18n } = useTranslation("common");

  const [loginFailed, setLoginFailed] = useState(false);

  async function getToken(username, password) {
    const response = await fetch(api, {
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
    setLoginFailed(false);
    const username = event.target[0].value;
    const password = event.target[1].value;

    const result = await getToken(username, password);

    if (result.status === 200) {
      localStorage.setItem("IsLoggedIn", "1");
      localStorage.setItem("token", result.data.access);
      localStorage.setItem("refresh", result.data.refresh);

      props.onLoginSuccess();
    } else if (result.status === 401) {
      // alert("Wrong Login or Password!");
      setLoginFailed(true);
    }
  };

  const hideFormHandler = (event) => {
    event.stopPropagation();
    props.onHideForm();
  };

  let loginFailedAlert = undefined;
  if (loginFailed === true) {
    loginFailedAlert = (
      <AuthError>{t("error.login.user_not_exists")}</AuthError>
    );
  }

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
                <label className={classes.logo_amp}>&</label>
                <label className="logo sec_s">S</label>
              </div>
            </div>
            <div className={classes.login_text}>
              {t("form.login.title", { service: "Stop & Shop" })}
            </div>
            {loginFailedAlert}
            <label className={classes.label_text}>
              {t("form.login.email")}
            </label>
            <input className="login_input_field" type="text" required />
            <label className={classes.label_text}>
              {t("form.login.password")}
            </label>
            <PasswordField />
            <button
              value=""
              type="submit"
              className={`btn btn-primary ${classes.submit_button}`}
            >
              {t("form.login.button")}
            </button>
            <div className={classes.afterword}>
              {t("form.login.afterword.text", { service: "Stop & Shop" })}{" "}
              <a
                onClick={() => {
                  props.toRegister();
                }}
                href="#"
              >
                {t("form.login.afterword.link")}
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
