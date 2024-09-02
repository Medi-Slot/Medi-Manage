import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import titleReducer from "./slices/titleSlice"
import appointmentReducer from "./slices/appointmentSlice";
// Import other reducers as needed

export const store = configureStore({
  reducer: {
    auth: authReducer,
    title: titleReducer,
    appointment: appointmentReducer,
    // Add other reducers here
  },
});

export default store;