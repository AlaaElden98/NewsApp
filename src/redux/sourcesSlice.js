import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {getSourcesUrl} from '../api/getUrl';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

export const getSources = createAsyncThunk('sources/getSources', async () => {
  const url = getSourcesUrl();
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data.sources;
});

const sourcesSlice = createSlice({
  name: 'sources',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getSources.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getSources.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.status = 'fulfilled';
      })
      .addCase(getSources.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  },
});


export default sourcesSlice.reducer;
