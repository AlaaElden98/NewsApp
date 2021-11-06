import {configureStore} from '@reduxjs/toolkit';

import sourcesReducer from './sourcesSlice';
import topHeadlinesReducerEG from './topHeadlinesEGSlice';
import topHeadlinesReducerUAE from './topHeadlinesUAESlice';
import sourcesHeadlinesReducer from './sourcesHeadlinesSlice';
import historyReducer from './historySlice';

export default store = configureStore({
  reducer: {
    sources: sourcesReducer,
    topHeadlinesEG: topHeadlinesReducerEG,
    topHeadlinesUAE: topHeadlinesReducerUAE,
    sourcesHeadlines: sourcesHeadlinesReducer,
    history: historyReducer,
  },
});
