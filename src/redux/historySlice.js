import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {storeData, getData} from '../AsyncStorage';
import {HISTORY_LIST_KEY, IDS_NUMBERS_KEY} from '../utilis/constants';

const initialState = {
  items: [],
  idsNumbers: 0,
};

export const getDataFromAsyncStorage = createAsyncThunk(
  'history/getDataFromAsyncStorage',
  async () => {
    const data = await getData(HISTORY_LIST_KEY);
    return data != null ? data : 'error';
  },
);

export const getIdsNumbersFromAsyncStorage = createAsyncThunk(
  'history/getIdsNumbersFromAsyncStorage',
  async () => {
    const data = await getData(IDS_NUMBERS_KEY);
    return data != null ? data : 'error';
  },
);

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      storeData(HISTORY_LIST_KEY, state.items);
    },
    increaseIdNumbers: (state, action) => {
      state.idsNumbers = state.items + 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getDataFromAsyncStorage.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(getIdsNumbersFromAsyncStorage.fulfilled, (state, action) => {
        state.idsNumbers = action.payload;
      });
  },
});

export const {addItem, increaseIdNumbers} = historySlice.actions;

export default historySlice.reducer;
