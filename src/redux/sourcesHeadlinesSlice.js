import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {getSourcesHeadlinesUrl} from '../api/getUrl';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

export const getSourcesHeadlines = createAsyncThunk(
  'sourcesHeadlines/getSourcesHeadlines',
  async ({source_id,page}) => {
    const url = getSourcesHeadlinesUrl(source_id,page);
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  },
);

const sourcesHeadlinesSlice = createSlice({
  name: 'sourcesHeadlines',
  initialState,
  reducers: {
    updateSourcesHeadlinesStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getSourcesHeadlines.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getSourcesHeadlines.fulfilled, (state, action) => {
        state.items =
          state.items === []
            ? action.payload
            : [...state.items, ...action.payload];
        state.status = 'fulfilled';
      })
      .addCase(getSourcesHeadlines.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
        console.log(state.error);
      });
  },
});

export const {updateSourcesHeadlinesStatus} = sourcesHeadlinesSlice.actions;
export default sourcesHeadlinesSlice.reducer;
