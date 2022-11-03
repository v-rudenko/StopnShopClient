import { createSlice } from "@reduxjs/toolkit";

initialState = { showCart: false, items: {}, counter: 0}

createSlice({
  name: "cart",
  initialState,
  // initialState: initialState,
  reducers: {
    addItem(state) {
      state.items.push(action.item)
    },
    removeItem() {},
    increment(state) {
      state.counter++;    //temp
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
