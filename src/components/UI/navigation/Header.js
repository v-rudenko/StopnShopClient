import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import RefreshToken from "../../authentication/RefreshToken";
import styles from "./Header.module.css";
import loginIcon from "../../images/login-icon.png";
import { Link } from "react-router-dom";
import NavCartButton from "./buttons/NavCartButton";
import NavRegularButton from "./buttons/NavRegularButton";

const Header = (props) => {
  const [t, i18n] = useTranslation("common");
  const [loginMode, setLoginMode] = useState("login");


    return (
      <header className={styles.top_bar}>
        {/* <button onClick={props.onItemCreation}>Create Item</button> */}

        <Link to={"/"}>
          <NavRegularButton>Go Home</NavRegularButton>
        </Link>
        {props.IsLoggedIn === true && (
          <Link to={"/create"}>
            <NavRegularButton>Create Item</NavRegularButton>
          </Link>
        )}
        {props.IsLoggedIn === true && <RefreshToken></RefreshToken>}
        <NavRegularButton
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          Eng
        </NavRegularButton>
        <NavRegularButton
          onClick={() => {
            i18n.changeLanguage("uk");
          }}
        >
          Укр
        </NavRegularButton>
        {props.IsLoggedIn === true && (
          <NavRegularButton
            className={styles.regular_button}
            onClick={props.onLogout}
          >
            {t("header.log_out")}
          </NavRegularButton>
        )}
        {props.IsLoggedIn === false && (
          <button
            value={"login"}
            onClick={props.onButtonPressed}
            className={styles.login_button}
          >
            <img src={loginIcon} alt="" />
            <span>{t("header.sign_in")}</span>
          </button>
        )}
        <NavCartButton />
      </header>
    );
  };

export default Header;
