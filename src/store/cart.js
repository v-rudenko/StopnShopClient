import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { showCart: false, items: [], counter: 0 };
const localCart = localStorage.getItem("Cart");
const localCounter = localStorage.getItem("Counter");


if (localStorage.getItem("Cart")) {
  initialCartState.items = JSON.parse(localCart);
  initialCartState.counter = JSON.parse(localCounter);
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    initItems(state) {
      state.items = JSON.parse(localStorage.getItem("Cart"));
      // alert("innit");
    },
    addItem(state, action) {
      const newItem = action.payload;
      // console.log(newItem.product.id);
      const existingItem = state.items.find(
        (item) => item.product.id === newItem.product.id
      );
      if (!existingItem) {
        state.items.push(action.payload);
      } else {
        existingItem.quantity++;
      }
      state.counter ++;
      localStorage.setItem("Cart", JSON.stringify(state.items));
      localStorage.setItem("Counter", JSON.stringify(state.counter));
    },
    removeItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload
      );
      state.items.splice(state.items.indexOf(existingItem), 1);
      state.counter -= existingItem.quantity;
      localStorage.setItem("Counter", JSON.stringify(state.counter));
      localStorage.setItem("Cart", JSON.stringify(state.items));
      // console.log(existingItem);
    },
    increment(state, action) {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload
      );
      existingItem.quantity++;
      state.counter++;
      localStorage.setItem("Counter", JSON.stringify(state.counter));
      localStorage.setItem("Cart", JSON.stringify(state.items));
    },
    decrement(state, action) {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload
      );
      existingItem.quantity--;
      state.counter--;
      localStorage.setItem("Counter", JSON.stringify(state.counter));
      if (existingItem.quantity <= "0") {
        state.items.splice(state.items.indexOf(existingItem), 1);
      }
      localStorage.setItem("Cart", JSON.stringify(state.items));
    },
    show(state) {
      state.showCart = true;
    },
    hide(state) {
      state.showCart = false;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
