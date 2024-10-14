import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../helpers/axios';

export const getAllCampers = createAsyncThunk(
  'campers/getAll',
  async (filters, thunkAPI) => {
    console.log(filters);

    try {
      const response = await API.get('/campers', {
        params: {
          page: 1,
          limit: 4,
          ...filters,
        },
      });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  'campers/getById',
  async (id, thunkAPI) => {
    try {
      const response = await API.get(`/campers/${id}`);

      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFilteredCampers = createAsyncThunk(
  'campers/getFiltered',
  async (filters, thunkAPI) => {
    try {
      const response = await API.get('/campers', {
        params: {
          page: 1,
          limit: 4,
          ...filters,
        },
      });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
