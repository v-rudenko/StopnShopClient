
import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./styles/CartEmpty.module.css";
import cartImage from "./styles/images/cart.png";

const CartEmpty = (props) => {
  const {t, i18n} = useTranslation("common")
  return (
    <div className={classes.wrapper_div}>
      <img className={classes.cart_image} src={cartImage} alt="cart" height="100px" />
      <h2>{t("shopping_cart.empty.header")}</h2>
      <p>{t("shopping_cart.empty.text")}</p>
      <button onClick={props.onHideCart} className={classes.button}>{t("shopping_cart.empty.button")}</button>
    </div>
  );
};

export default CartEmpty;
