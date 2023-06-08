import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../redux/slices/authSlice';
import addPostSlice from '../redux/slices/addPostSlice';

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    addPostSlice: addPostSlice,
  },
});
