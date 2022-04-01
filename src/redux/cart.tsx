import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { useDispatch } from "react-redux";

const initialState: CartReduxState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const exItems = state.items ? state.items : [];

      const data = action.payload;
      return {
        ...state,
        items: [...exItems, data],
      };
    },
    clearCart(state) {
      return {
        ...state,
        items: [],
        formInfo: {},
      };
    },
    saveInput(state, action) {
      return {
        ...state,
        formInfo: action.payload,
      };
    },
    removeFromCart(state, action) {
      const exItems = state.items ? state.items : [];
      const filtered =
        exItems && exItems.filter((item: ItemType) => item !== action.payload);
      return {
        items: filtered,
      };
    },
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => ({
      ...state,
      ...payload.cart,
    }),
  },
});

export const { addToCart, clearCart, removeFromCart, saveInput } =
  cartSlice.actions;

export const useAppDispatch = () => useDispatch();
