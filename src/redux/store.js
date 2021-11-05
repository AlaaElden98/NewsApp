import {configureStore} from '@reduxjs/toolkit';

import sourcesReducer from './sourcesSlice';
export default store = configureStore({
  reducer: {
    sources: sourcesReducer,
  },
});
