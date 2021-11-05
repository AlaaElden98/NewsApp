import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {getTopHeadlinesUrl} from '../api/getUrl';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

export const getTopHeadlinesUAE = createAsyncThunk(
  'topHeadlinesUAE/getTopHeadlinesUAE',
  async ({page, country, category}) => {
    const url = getTopHeadlinesUrl(page, country, category);
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  },
);

const topHeadlinesUAESlice = createSlice({
  name: 'topHeadlinesUAE',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTopHeadlinesUAE.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getTopHeadlinesUAE.fulfilled, (state, action) => {
        state.items =
          state.items === []
            ? action.payload
            : [...state.items, ...action.payload];
        state.status = 'fulfilled';
      })
      .addCase(getTopHeadlinesUAE.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
        console.log(state.error);
      });
  },
});

export default topHeadlinesUAESlice.reducer;
