import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { useDispatch } from "react-redux";

const initialState: UserReduxState = {
  id: undefined,
  username: "",
  admin: 0,
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },

  extraReducers: {
    [HYDRATE]: (state, { payload }) => ({
      ...state,
      ...payload.user,
    }),
  },
});

export const { setUser } = userSlice.actions;

export const useAppDispatch = () => useDispatch();
