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
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  },
);

const topHeadlinesUAESlice = createSlice({
  name: 'topHeadlinesUAE',
  initialState,
  reducers: {
    updateUAEStatus: (state, action) => {
      state.status = action.payload;
    },
  },
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
      });
  },
});

export const {updateUAEStatus} = topHeadlinesUAESlice.actions;
export default topHeadlinesUAESlice.reducer;
