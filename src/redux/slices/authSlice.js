import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: null,
    username: null,
    email: null,
  },
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = {
        id: action.payload.uid,
        username: action.payload.displayName,
        email: action.payload.email,
      };
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = {
        id: null,
        username: null,
        email: null,
      };
    },
    signupSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = {
        id: action.payload.uid,
        username: action.payload.displayName,
        email: action.payload.email,
      };
    },
    setUser(state, action) {
      state.isAuthenticated = true;
      state.user = {
        id: action.payload.uid,
        username: action.payload.displayName,
        email: action.payload.email,
      };
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, signupSuccess, setUser } = authSlice.actions;
export default authSlice.reducer;
