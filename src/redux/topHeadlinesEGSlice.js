import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {getTopHeadlinesUrl} from '../api/getUrl';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

export const getTopHeadlinesEG = createAsyncThunk(
  'topHeadlinesEG/getTopHeadlinesEG',
  async ({page, country, category}) => {
    const url = getTopHeadlinesUrl(page, country, category);
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  },
);

const topHeadlinesEGSlice = createSlice({
  name: 'topHeadlinesEG',
  initialState,
  reducers: {
    updateEGStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getTopHeadlinesEG.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getTopHeadlinesEG.fulfilled, (state, action) => {
        state.items =
          state.items === []
            ? action.payload
            : [...state.items, ...action.payload];
        state.status = 'fulfilled';
      })
      .addCase(getTopHeadlinesEG.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
        console.log(state.error);
      });
  },
});

export const {updateEGStatus} = topHeadlinesEGSlice.actions;
export default topHeadlinesEGSlice.reducer;
