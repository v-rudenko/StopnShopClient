import React, { useState, useEffect } from "react";
import LoginForm from "./components/authentication/LoginForm";
import RegisterForm from "./components/authentication/RegisterForm";
import "./App.css";
import Header from "./components/UI/navigation/Header";
import Homepage from "./components/Homepage";
import { useTranslation } from "react-i18next";

const App = (props) => {
  const [showAuthForm, setShowAuthForm] = useState(undefined);

  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.IsLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  });
  
  const hideFormHandler = (event) => {
    setShowAuthForm(undefined)
  }

  const loginHandler = () => {
    setIsLoggedIn(true);
    setShowAuthForm(undefined)
  };
  const logoutHandler = () => {
    localStorage.removeItem("IsLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    setShowAuthForm("")
    setIsLoggedIn(false);
  };

  const onAuthButtonHandler = (event) => {
    setShowAuthForm(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <Header
        IsLoggedIn={IsLoggedIn}
        onButtonPressed={onAuthButtonHandler}
        onLogout={logoutHandler}
      />
      
      <h1>Logged in: {IsLoggedIn.toString()}</h1>
      {showAuthForm && <LoginForm onHideForm={hideFormHandler} onLoginSuccess={loginHandler}></LoginForm>}
      <Homepage />
    </>
  );
};

export default App;
