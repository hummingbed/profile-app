import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../sliceMachine/userSlice.js';

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;