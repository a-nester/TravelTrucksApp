import { createSlice } from '@reduxjs/toolkit';
import { getAllCampers, getCamperById, getFilteredCampers } from './operations';
import toast from 'react-hot-toast';
import { MESSAGES } from '../../constants/constants';

const { SUCCESS, ERROR } = MESSAGES;

const initialState = {
  items: [],
  itemById: {},
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleSuccess = message => {
  toast.success(message);
};

const handleError = message => {
  toast.error(message);
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllCampers.pending, handlePending)
      .addCase(getAllCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(...payload.items);
      })
      .addCase(getAllCampers.rejected, state => {
        state.isLoading = false;
        handleError(ERROR.SERVER_ERROR);
      })
      .addCase(getCamperById.pending, handlePending)
      .addCase(getCamperById.fulfilled, (state, { payload }) => {
        state.itemById = payload;
      })
      .addCase(getCamperById.rejected, state => {
        state.isLoading = false;
        handleError(ERROR.SERVER_ERROR);
      })
      .addCase(getFilteredCampers.pending, handlePending)
      .addCase(getFilteredCampers.fulfilled, (state, { payload }) => {
        state.isLoading;
        state.items = payload.items;
      })
      .addCase(getFilteredCampers.rejected, state => {
        state.isLoading = false;
        handleError(ERROR.SERVER_ERROR);
      });
  },
});

export const campersReducer = campersSlice.reducer;
