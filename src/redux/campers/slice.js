import { createSlice } from '@reduxjs/toolkit';
import { getAllCampers, getCamperById, getFilteredCampers } from './operations';

const initialState = {
  items: [],
  itemById: {},
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllCampers.pending, handlePending)
      .addCase(getAllCampers.fulfilled, (state, { payload }) => {
        console.log(payload);

        state.isLoading = false;
        state.items.push(...payload.items);
      })
      .addCase(getCamperById.pending, handlePending)
      .addCase(getCamperById.fulfilled, (state, { payload }) => {
        state.itemById = payload;
      })
      .addCase(getFilteredCampers.fulfilled, (state, { payload }) => {
        console.log(payload);

        state.isLoading;
        state.items = payload.items;
      });
  },
});

export const campersReducer = campersSlice.reducer;
