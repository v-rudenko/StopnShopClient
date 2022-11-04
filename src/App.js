import React, { useState, useEffect } from "react";
import LoginForm from "./components/authentication/LoginForm";
import RegisterForm from "./components/authentication/RegisterForm";
import "./App.css";
import Header from "./components/UI/navigation/Header";
import Homepage from "./pages/Homepage";
import ItemCreation from "./pages/ItemCreation";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Cart from "./components/UI/cart/Cart";
import Backdrop from "./components/UI/helpers/Backdrop";
import { useDispatch, useSelector } from "react-redux";

const App = (props) => {
  const [showAuthForm, setShowAuthForm] = useState(undefined);
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);

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

  // const onAuthButtonHandler = (event) => {
  //   setShowAuthForm(event.target.value);
  //   console.log(event.target.value);
  // };

  const toRegisterHandler = () => {
    setShowAuthForm("register");
  };

  const toLoginHandler = () => {
    setShowAuthForm("login");
  };

  return (
    <>
      <Header
        IsLoggedIn={IsLoggedIn}
        onButtonPressed={toLoginHandler}
        // onButtonPressed={onAuthButtonHandler}
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
        <Route path="/" element={<Navigate to="/homepage" />}></Route>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/create" element={<ItemCreation />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
      {showCart === true && <Cart></Cart>}
    </>
  );
};

export default App;
