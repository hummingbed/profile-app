import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://random-data-api.com/api/v2/users?size=10&is_xml=true';

export const fetchUserProfile = createAsyncThunk(
  'fetchUserProfile',
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

const rocketsSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getAllUserProfileData = (state) => state.rockets.users;
export const getAllUserProfileStatus = (state) => state.rockets.status;
export const getAllUserProfileError = (state) => state.rockets.error;

export default rocketsSlice.reducer;