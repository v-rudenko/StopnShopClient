import React from "react";
import { useTranslation } from "react-i18next";
import RefreshToken from "../../authentication/RefreshToken";
import styles from "./Header.module.css";

const Header = (props) => {
  const [t, i18n] = useTranslation('common');
  if (props.IsLoggedIn !== true) {
    return (
      <header className={styles.top_bar}>
        <button onClick={() => {i18n.changeLanguage('en')}}>Eng</button>
        <button onClick={() => {i18n.changeLanguage('uk')}}>Укр</button>
        <button
          value={"login"}
          onClick={props.onButtonPressed}
          className="login_button btn btn-primary btn-sm"
        >
          Sign-in
        </button>
        {/* <button
          value={"register"}
          onClick={props.onButtonPressed}
          className="create_account_button btn btn-secondary btn-sm"
        >
          Create Account
        </button> */}
      </header>
    );
  } else {
    return (
      <header className={styles.top_bar}>
        <RefreshToken></RefreshToken>
        <button onClick={() => {i18n.changeLanguage('en')}}>Eng</button>
        <button onClick={() => {i18n.changeLanguage('uk')}}>Укр</button>
        <button onClick={props.onLogout}>Log out</button>
      </header>
    );
  }
};

export default Header;
