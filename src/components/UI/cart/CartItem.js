import React from "react";
import CloseButton from "../navigation/buttons/CloseButton";
import classes from "./styles/CartItem.module.css";

const CartItem = () => {
  const item = {
    id: 10,
    name: "Monkey",
    image:
      "https://cdn.britannica.com/06/150806-050-6AE99C98/Proboscis-monkey.jpg",
    price: 657,
  };

  return (
    <div className={classes.item_div}>
      <CloseButton className={classes.close} />
      <div className={classes.photo_div}>
        <img src={item.image} alt="" />
        <div className={classes.content_div}>
          <h6>{item.name}</h6>
          <div className={classes.bottom_div}>
            <span>{item.price}</span>
            <div className={classes.buttons}>
              <span>-</span>
              <span>3</span>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
