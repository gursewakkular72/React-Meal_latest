import { createSlice, configureStore, current } from "@reduxjs/toolkit";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { items } from "../Data/data";
// import { items } from "../Data/data.js";

const initialState = { items: [], orderTotal: 0, totalItems: 0 };

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action) {
      if (state.items.length === 0) {
        action.payload.count = 1;
        console.log(typeof state.orderTotal);
        state.orderTotal = +action.payload.price + state.orderTotal;
        state.totalItems += 1;
        state.items.push(action.payload);
      } else {
        const itemFoundIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );

        //if the item found
        if (itemFoundIndex !== -1) {
          state.items[itemFoundIndex].count++;
          console.log(typeof state.orderTotal);
          state.orderTotal = +action.payload.price + state.orderTotal;
          state.totalItems++;
        }
        // if the items not found
        else {
          action.payload.count = 1;
          state.orderTotal = +action.payload.price + state.orderTotal;
          state.items.push(action.payload);
          state.totalItems++;
        }
      }
    },
    removeItem(state, action) {
      const itemFoundIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemFoundIndex !== -1) {
        if (state.items[itemFoundIndex].count === 1) {
          state.totalItems -= 1;
          state.items.splice(itemFoundIndex, 1);
          if (state.orderTotal !== 0) state.orderTotal -= action.payload.price;
        } else {
          state.items[itemFoundIndex].count--;
          state.orderTotal -= action.payload.price;
          state.totalItems -= 1;
        }
      } else {
        return;
      }

      // console.log(current(state.items), "from remove");
    },
    totalPrice(state, action) {
      state.items.reducer((previous, current) => {}, 0);
    },

    resetCart(state) {
      state.items.length = 0;
      state.totalItems = 0;
      state.orderTotal = 0;
    },
  },
});

const store = configureStore({
  reducer: itemsSlice.reducer,
});

export const itemsSliceActions = itemsSlice.actions;
export default store;
