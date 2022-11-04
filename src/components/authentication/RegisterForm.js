import React, { useState } from "react";
import "./LoginForm.css";
import PasswordField from "./PasswordField";
import classes from "./styles/LoginForm.module.css";
import { useTranslation } from "react-i18next";
import AuthError from "./AuthError";
import CloseButton from "../UI/navigation/buttons/CloseButton";

const RegisterForm = (props) => {
  const { t, i18n } = useTranslation("common");
  const registerEndpoint = "http://127.0.0.1:8000/account/register/";
  const [registerFailedAlert, setRegisterFailedAlert] = useState(undefined);

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
    const username = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const confirmPassword = event.target[4].value;
    if (password !== confirmPassword) {
      setRegisterFailedAlert(
        <AuthError>{t("error.register.passwords_not_match")}</AuthError>
      );
    } else {
      setRegisterFailedAlert(undefined);
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
              <CloseButton
                onClick={hideFormHandler}
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
            <div className={classes.login_text}>{t("form.register.title")}</div>
            {registerFailedAlert}
            <label className={classes.label_text}>
              {t("form.login.username")}
            </label>
            <input className="login_input_field" type="text" />
            <label className={classes.label_text}>
              {t("form.login.email")}
            </label>
            <input className="login_input_field" type="email" />
            <label className={classes.label_text}>
              {t("form.login.password")}
            </label>
            <PasswordField />
            <label className={classes.label_text}>
              {t("form.register.confirm_password")}
            </label>
            <PasswordField />
            <button
              value=""
              type="submit"
              className={`btn btn-primary ${classes.submit_button}`}
            >
              {t("form.register.button")}
            </button>
            <div className={classes.afterword}>
              {t("form.register.afterword.text", { service: "Stop & Shop" })}{" "}
              <a
                onClick={() => {
                  props.toLogin();
                }}
                href="#"
              >
                {t("form.register.afterword.link")}
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
