import React from "react";
import LoginForm from "./LoginForm";
import "./LoginForm.css";
import PasswordField from "./PasswordField";
import classes from "./styles/LoginForm.module.css";
import closeIcon from "./styles/images/icon-close.svg";
import { useTranslation } from "react-i18next";

const RegisterForm = (props) => {
  const { t, i18n } = useTranslation("common");

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
              Register Form
            </div>
            <label>Username</label>
            <input className="login_input_field" type="text" />
            <label>E-mail</label>
            <input className="login_input_field" type="email" />
            <label>{t("form.login.password")}</label>
            <PasswordField />
            <label>Confirm Password</label>
            <PasswordField />
            <button value="" type="submit" className={`btn btn-primary ${classes.submit_button}`}>
              {t("form.login.log_in")}
            </button>
            <div className={classes.afterword}>New to Stop & Shop? <a onClick={() => {props.toLogin()}} href="#">Create your account</a></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
