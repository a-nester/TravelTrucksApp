import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  equipment: {},
  type: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addLocation: {
      reducer(state, { payload }) {
        state.location = payload.location;
      },
      prepare(location) {
        return {
          payload: { location },
        };
      },
    },
    addEquipment: {
      reducer(state, { payload }) {
        console.log('payload', payload);

        state.equipment = payload;
      },
      prepare(equipment) {
        return {
          payload: { ...equipment },
        };
      },
    },
  },
});

export const { addLocation, addEquipment } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
