import { configureStore } from "@reduxjs/toolkit";
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from "next-redux-cookie-wrapper";
import { createWrapper } from "next-redux-wrapper";

import { userSlice } from "./user";
import { cartSlice } from "./cart";

export const makeStore = wrapMakeStore(() =>
  configureStore({
    reducer: {
      [userSlice.name]: userSlice.reducer,
      [cartSlice.name]: cartSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(
        nextReduxCookieMiddleware({
          subtrees: [cartSlice.name, userSlice.name],
        })
      ),
  })
);

export const wrapper: any = createWrapper(makeStore);
