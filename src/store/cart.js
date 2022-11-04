import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { showCart: false, items: {}, counter: 0}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state) {
      state.items.push(action.item)
    },
    removeItem() {},
    increment(state) {
    },
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;    //temp
    },
    show(state) {
      state.showCart = true;
    },
    hide(state) {
      state.showCart = false;
    },
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;