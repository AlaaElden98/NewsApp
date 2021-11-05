import {configureStore} from '@reduxjs/toolkit';

import sourcesReducer from './sourcesSlice';
import topHeadlinesReducerEG from './topHeadlinesEGSlice';
import topHeadlinesReducerUAE from './topHeadlinesUAESlice';

export default store = configureStore({
  reducer: {
    sources: sourcesReducer,
    topHeadlinesEG: topHeadlinesReducerEG,
    topHeadlinesUAE: topHeadlinesReducerUAE,
  },
});
