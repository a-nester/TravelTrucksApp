import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  equipment: {},
  form: '',
  page: 1,
  limit: 4,
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
        state.equipment = payload;
      },
      prepare(equipment) {
        return {
          payload: { ...equipment },
        };
      },
    },
    addType: {
      reducer(state, { payload }) {
        state.form = payload.form;
      },
      prepare(type) {
        return {
          payload: { form: type },
        };
      },
    },
  },
});

export const { addLocation, addEquipment, addType } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
