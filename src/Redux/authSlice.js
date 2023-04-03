import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  msg: "",
  user: "",
  token: "",
  loadings: false,
  error: "",
};
export const signUpUser = createAsyncThunk("signupuser", async () => {
  const res = await axios.post("http://localhost:4000/api/signup");
  return await res.json();
});
export const signInUser = createAsyncThunk("signinuser", async () => {
  const res = await axios.post("http://localhost:4000/api/login");
  return await res.json();
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.token = localStorage.getItem("user");
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extrareducers: {
    /******* SIGN UP *****/
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },
    /******* LOGIN ********/
    [signInUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signInUser.fulfilled]: (
      state,
      { payload: { error, msg, token, user } }
    ) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
        state.token = token;
        state.user = user;

        localStorage.setItem("msg", msg);
        localStorage.setItem("user", user);
        localStorage.getItem("token", token);
      }
    },
    [signInUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer;
