import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../redux/slices/authSlice';
import addPostSlice from '../redux/slices/addPostSlice';
// all slices combined here
export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    addPostSlice: addPostSlice,
  },
});
