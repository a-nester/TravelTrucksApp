import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../helpers/axios';

export const getAllCampers = createAsyncThunk(
  'campers/getAll',
  async (filters, thunkAPI) => {
    const newFilters = {
      ...filters.equipment,
    };
    console.log(newFilters);

    try {
      const response = await API.get('/campers', {
        params: {
          // query: `${topic}`,
          page: 1,
          limit: 4,
          ...newFilters,
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
