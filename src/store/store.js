import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from '../sliceMachine/rocketSlice.js';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;