import React, { useState, useEffect } from "react";
import LoginForm from "./components/authentication/LoginForm";
import RegisterForm from "./components/authentication/RegisterForm";
import "./App.css";
import Header from "./components/UI/navigation/Header";
import Homepage from "./components/Homepage";

const App = (props) => {
  const [showAuthForm, setShowAuthForm] = useState("");

  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.IsLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  });

  const loginHandler = () => {
    setIsLoggedIn(true);
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

  if (IsLoggedIn === false) {
    if (showAuthForm === "login") {
      return (
        <div>
          <Header
            IsLoggedIn={IsLoggedIn}
            onButtonPressed={onAuthButtonHandler}
          />
          <LoginForm onLoginSuccess={loginHandler} />
        </div>
      );
    }
    if (showAuthForm === "register") {
      return (
        <div>
          <Header
            IsLoggedIn={IsLoggedIn}
            onButtonPressed={onAuthButtonHandler}
          />
          <RegisterForm />
        </div>
      );
    }
  }
  return (
    <>
      <Header
        IsLoggedIn={IsLoggedIn}
        onButtonPressed={onAuthButtonHandler}
        onLogout={logoutHandler}
      />
      
      <h1>Logged in: {IsLoggedIn.toString()}</h1>
      <Homepage />
    </>
  );
};

export default App;
