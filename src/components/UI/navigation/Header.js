import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import RefreshToken from "../../authentication/RefreshToken";
import styles from "./Header.module.css";
import loginIcon from "../../images/login-icon.png"
import { Redirect, Link } from "react-router-dom";
import NavCartButton from "./buttons/NavCartButton";
import NavRegularButton from "./buttons/NavRegularButton";

const Header = (props) => {
  const [t, i18n] = useTranslation('common');
  const [loginMode, setLoginMode] = useState('login')

  // const ItemCreationHandler = () => {
  //   // <Redirect to="/baboon"></Redirect>
  // }

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
          <span>{t("header.sign_in")}</span>
        </button>
      </header>
    );
  } else {
    return (
      <header className={styles.top_bar}>
        {/* <button onClick={props.onItemCreation}>Create Item</button> */}

        <Link to={"/"}><button>Go Home</button></Link>
        <Link to={"/create"}><button>Create Item</button></Link>
        <RefreshToken></RefreshToken>
        <NavRegularButton onClick={() => {i18n.changeLanguage('en')}}>Eng</NavRegularButton>
        <NavRegularButton onClick={() => {i18n.changeLanguage('uk')}}>Укр</NavRegularButton>
        <NavRegularButton className={styles.regular_button} onClick={props.onLogout}>{t("header.log_out")}</NavRegularButton>
        <NavCartButton />
      </header>
    );
  }
};

export default Header;
