import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { showCart: false, items: [], counter: 0 };
const localCart = localStorage.getItem("Cart");
const localCounter = localStorage.getItem("Counter");

if (localStorage.getItem("Cart")) {
  initialCartState.items = JSON.parse(localCart);
  initialCartState.counter = JSON.parse(localCounter);
} else {
  localStorage.setItem("Counter", JSON.stringify(0));
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.product.id === newItem.product.id
      );
      if (!existingItem) {
        state.items.push(action.payload);
      } else {
        existingItem.quantity++;
      }
      state.counter++;
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
