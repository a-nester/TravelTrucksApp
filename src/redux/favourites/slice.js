import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { MESSAGES } from '../../constants/constants';

const { SUCCESS, ERROR } = MESSAGES;

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
        toast.success(SUCCESS.ADD_FAVOURITES);
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
      toast.success(SUCCESS.REMOVE_FAVOURITES);
    },
  },
});

export const { addToFavourites, removeFromFavourites } =
  favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
