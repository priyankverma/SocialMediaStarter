import { createSlice } from '@reduxjs/toolkit';
import { postsData } from '../../constants/dataConstants';
const initialState = {
  posts: postsData, // stores the dummy data created for the posts in dataConstants file
};
// adds the post added by the user in the array
export const addPostSlice = createSlice({
  name: 'addPost',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [action.payload, ...state.posts]; // appends the new post at the top of the array
    },
  },
});

export const { addPost } = addPostSlice.actions;

export default addPostSlice.reducer;
