import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart";
import Backdrop from "../helpers/Backdrop";
import CloseButton from "../navigation/buttons/CloseButton";
import CartItem from "./CartItem";
import classes from "./styles/Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  // dispatch(cartActions.initItems());

  console.log(items);

  const products = items.map((item) => (
    <CartItem
      key={item.product.id}
      id={item.product.id}
      name={item.product.name}
      image={item.product.image}
      price={item.product.price}
      quantity={item.quantity}
    />
  ));

  const hideCartHandler = () => {
    dispatch(cartActions.hide());
  };

  return (
    <>
      <Backdrop onClick={hideCartHandler} />
      <div className={classes.cart}>
        <header>
          <h3>Cart</h3>
          <CloseButton onClick={hideCartHandler} className={classes.close} />
        </header>
        <main>
          {items.length === 0 && <h1>Cart is empty</h1>}
          {products}
        </main>
      </div>
    </>
  );
};

export default Cart;
