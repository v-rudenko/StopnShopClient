import React, { useState, useEffect } from "react";
import LoginForm from "./components/authentication/LoginForm";
import RegisterForm from "./components/authentication/RegisterForm";
import "./App.css";
import Header from "./components/UI/navigation/Header";
import Homepage from "./pages/Homepage";
import { useTranslation } from "react-i18next";
import ItemCreation from "./pages/ItemCreation";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";

const App = (props) => {
  const [showAuthForm, setShowAuthForm] = useState(undefined);
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [showItemCreation, setShowItemCreation] = useState(false);

  useEffect(() => {
    if (localStorage.IsLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  });

  const hideFormHandler = (event) => {
    setShowAuthForm(undefined);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
    setShowAuthForm(undefined);
  };
  const logoutHandler = () => {
    localStorage.removeItem("IsLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    setShowAuthForm("");
    setIsLoggedIn(false);
  };

  const onAuthButtonHandler = (event) => {
    setShowAuthForm(event.target.value);
    console.log(event.target.value);
  };

  const toRegisterHandler = () => {
    setShowAuthForm("register");
  };

  const toLoginHandler = () => {
    setShowAuthForm("login");
  };

  const itemCreationHandler = () => {
    setShowItemCreation(!showItemCreation);
  };

  if (showItemCreation === true) {
    return (
      <React.Fragment>
        <Header
          IsLoggedIn={IsLoggedIn}
          onButtonPressed={onAuthButtonHandler}
          onLogout={logoutHandler}
          // onItemCreation={itemCreationHandler}
        />
        <ItemCreation></ItemCreation>
      </React.Fragment>
    );
  }

  return (
    <>
      <Header
        IsLoggedIn={IsLoggedIn}
        onButtonPressed={onAuthButtonHandler}
        onLogout={logoutHandler}
        // onItemCreation={itemCreationHandler}
      />

      <h1>Logged in: {IsLoggedIn.toString()}</h1>
      {showAuthForm === "login" && (
        <LoginForm
          onHideForm={hideFormHandler}
          onLoginSuccess={loginHandler}
          toRegister={toRegisterHandler}
        ></LoginForm>
      )}
      {showAuthForm === "register" && (
        <RegisterForm
          onHideForm={hideFormHandler}
          onLoginSuccess={loginHandler}
          toLogin={toLoginHandler}
        ></RegisterForm>
      )}
      <Routes>
        <Route path="/" element={<Navigate  to="/homepage"/>}>
        </Route>
        <Route path="/homepage" element={<Homepage />}/>
        <Route path="/create" element={<ItemCreation/>}/>
        <Route path="/product/:productId" element={<ProductPage/>}/>
      </Routes>
    </>
  );
};

export default App;
