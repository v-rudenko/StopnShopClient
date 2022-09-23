import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import RefreshToken from "../../authentication/RefreshToken";
import styles from "./Header.module.css";
import loginIcon from "../../images/login-icon.png"

const Header = (props) => {
  const [t, i18n] = useTranslation('common');
  const [loginMode, setLoginMode] = useState('login')

  if (props.IsLoggedIn !== true) {
    return (
      <header className={styles.top_bar}>
        <button onClick={() => {i18n.changeLanguage('en')}}>Eng</button>
        <button onClick={() => {i18n.changeLanguage('uk')}}>Укр</button>
        <button
          value={'login'}
          onClick={props.onButtonPressed}
          className={styles.login_button}
        >
          <img src={loginIcon} alt="" />
          {t("header.sign_in")}
        </button>
      </header>
    );
  } else {
    return (
      <header className={styles.top_bar}>
        <RefreshToken></RefreshToken>
        <button onClick={() => {i18n.changeLanguage('en')}}>Eng</button>
        <button onClick={() => {i18n.changeLanguage('uk')}}>Укр</button>
        <button onClick={props.onLogout}>{t("header.log_out")}</button>
      </header>
    );
  }
};

export default Header;
