import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: {
      reducer(state, { payload }) {
        state.list.push(payload);
      },
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },
    },
    removeFromFavourites(state, { payload }) {
      state.list = state.list.filter(el => el.id !== payload);
    },
  },
});

export const { addToFavourites, removeFromFavourites } =
  favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
