import React from "react";
import "./LoginForm.css";
import PasswordField from "./PasswordField";
import classes from "./styles/LoginForm.module.css";
import closeIcon from "./styles/images/icon-close.svg";
import { useTranslation } from "react-i18next";

const RegisterForm = (props) => {
  const { t, i18n } = useTranslation("common");
  const registerEndpoint = "http://127.0.0.1:8000/account/register/";

  async function Register(username, email, password, confirmPassword) {
    const response = await fetch(registerEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        password2: confirmPassword,
      }),
    });
    const data = await response.json();
    return {
      data: data,
      status: response.status,
    };
  }

  const registerSubmitHandler = async (event) => {
    event.preventDefault();
    // console.log(event);
    const username = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const confirmPassword = event.target[4].value;
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
    } else {
      const result = Register(username, email, password, confirmPassword);
      console.log(result);
    }
  };
  // console.log(username);

  const hideFormHandler = () => {
    props.onHideForm();
  };

  return (
    <div>
      <form value="bob" onSubmit={registerSubmitHandler} action="">
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
            <div className={classes.login_text}>Register Form</div>
            <label className={classes.label_text}>Username</label>
            <input className="login_input_field" type="text" />
            <label className={classes.label_text}>E-mail</label>
            <input className="login_input_field" type="email" />
            <label className={classes.label_text}>
              {t("form.login.password")}
            </label>
            <PasswordField />
            <label className={classes.label_text}>Confirm Password</label>
            <PasswordField />
            <button
              value=""
              type="submit"
              className={`btn btn-primary ${classes.submit_button}`}
            >
              {t("form.login.log_in")}
            </button>
            <div className={classes.afterword}>
              New to Stop & Shop?{" "}
              <a
                onClick={() => {
                  props.toLogin();
                }}
                href="#"
              >
                Create your account
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
