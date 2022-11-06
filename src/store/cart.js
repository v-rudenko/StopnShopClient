import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { showCart: false, items: [], counter: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload
      console.log(newItem.product.id);
      const existingItem = state.items.find(item => item.product.id === newItem.product.id);
      if (!existingItem) {
        state.items.push(action.payload);
      } else {
        existingItem.quantity ++;
      }
      state.counter++;
    },
    removeItem(state, action) {
      const existingItem = state.items.find(item => item.product.id === action.payload);
      state.items.splice(existingItem, 1)
      state.counter -= existingItem.quantity;
      // console.log(existingItem);
    },
    increment(state, action) {
      const existingItem = state.items.find(item => item.product.id === action.payload);
      existingItem.quantity++;
      state.counter++;
    },
    decrement(state, action) {
      const existingItem = state.items.find(item => item.product.id === action.payload);
      existingItem.quantity--;
      state.counter--;
      if (existingItem.quantity <= "0") {
        state.items.splice(existingItem, 1)
      }
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
