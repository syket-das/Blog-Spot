import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './features/postsSlice';
import userSlice from './features/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    posts: postsSlice,
  },
});

export default store;
