import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../helpers/axios';

export const getAllCampers = createAsyncThunk(
  'campers/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await API.get('/campers');
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
