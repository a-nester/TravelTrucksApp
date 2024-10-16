import { createSlice } from '@reduxjs/toolkit';
import { getAllCampers, getCamperById, getFilteredCampers } from './operations';
import { MESSAGES } from '../../constants/constants';
import { errorHandler } from '../../helpers/errorHandler';

const { ERROR } = MESSAGES;

const initialState = {
  items: [],
  itemById: {},
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleError = message => {
  errorHandler(message);
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    clearCampers: state => {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCampers.pending, handlePending)
      .addCase(getAllCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(...payload.items);
      })
      .addCase(getAllCampers.rejected, (state, payload) => {
        state.isLoading = false;
        handleError(payload || ERROR.SERVER_ERROR);
      })
      .addCase(getCamperById.pending, handlePending)
      .addCase(getCamperById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.itemById = payload;
      })
      .addCase(getCamperById.rejected, (state, { payload }) => {
        state.isLoading = false;
        handleError(payload || ERROR.SERVER_ERROR);
      })
      .addCase(getFilteredCampers.pending, handlePending)
      .addCase(getFilteredCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.items || null;
      })
      .addCase(getFilteredCampers.rejected, (state, action) => {
        state.isLoading = false;
        handleError(action.payload || ERROR.SERVER_ERROR);
      });
  },
});

export const campersReducer = campersSlice.reducer;
export const clearCampers = campersSlice.actions;
