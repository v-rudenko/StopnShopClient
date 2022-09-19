import React from "react";
import RefreshToken from "../../authentication/RefreshToken";
import styles from "./Header.module.css";

const Header = (props) => {
  if (props.IsLoggedIn !== true) {
    return (
      <header className={styles.top_bar}>
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
        <button onClick={props.onLogout}>Log out</button>
      </header>
    );
  }
};

export default Header;
