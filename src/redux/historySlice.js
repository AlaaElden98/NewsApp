import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {storeData, getData} from '../AsyncStorage';
import {HISTORY_LIST_KEY} from '../utilis/constants';

const initialState = {
  items: [],
};

export const getDataFromAsyncStorage = createAsyncThunk(
  'history/getDataFromAsyncStorage',
  async () => {
    const data = await getData(HISTORY_LIST_KEY);
    return data != null ? data : initialState.items;
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
    updateItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getDataFromAsyncStorage.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const {addItem, updateItems} = historySlice.actions;

export default historySlice.reducer;
