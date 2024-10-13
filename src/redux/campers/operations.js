import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../helpers/axios';

export const getAllCampers = createAsyncThunk(
  'campers/getAll',
  async (page, thunkAPI) => {
    try {
      const response = await API.get('/campers', {
        params: {
          // client_id: 'DGBjysr0h1RikZj98OV23AQkRWTDZs5M74r2kwonZrU',
          // query: `${topic}`,
          page,
          limit: 4,
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
