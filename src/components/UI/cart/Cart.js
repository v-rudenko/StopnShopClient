import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart";
import Backdrop from "../helpers/Backdrop";
import CloseButton from "../navigation/buttons/CloseButton";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";
import classes from "./styles/Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const {t, i18n} = useTranslation("common");

  console.log(items);

  const products = items.map((item) => (
    <CartItem
      key={item.product.id}
      id={item.product.id}
      name={item.product.name}
      image={item.product.image}
      price={item.product.price * item.quantity}
      quantity={item.quantity}
    />
  ));

  let amount = 0;
  items.forEach((item) => {
    amount += item.product.price * item.quantity;
  });

  const hideCartHandler = () => {
    dispatch(cartActions.hide());
  };

  return (
    <>
      <Backdrop onClick={hideCartHandler} />
      <div className={classes.cart}>
        <div className={classes.padding_div}>
          <header>
            <h3>{t("shopping_cart.header")}</h3>
            <CloseButton onClick={hideCartHandler} className={classes.close} />
          </header>
          <main>{items.length <= 0 ? <CartEmpty onHideCart={hideCartHandler}/> : products}</main>
        </div>
        {items.length > 0 && <footer>
          <div className={classes.footer_content_div}>
            <span className={classes.money_text}>{t("shopping_cart.amount")}</span>
            <span className={classes.money}>{amount}$</span>
          </div>
          <button className={classes.cart_button}>{t("shopping_cart.button")}</button>
        </footer>}
      </div>
    </>
  );
};

export default Cart;
