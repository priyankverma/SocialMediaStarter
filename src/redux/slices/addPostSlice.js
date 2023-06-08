import { createSlice } from '@reduxjs/toolkit';
import { postsData } from '../../constants/dataConstants';
const initialState = {
  posts: postsData,
};

export const addPostSlice = createSlice({
  name: 'addPost',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [action.payload, ...state.posts ];
    },
  },
});

export const { addPost } = addPostSlice.actions;

export default addPostSlice.reducer;
