import { combineReducers, configureStore } from '@reduxjs/toolkit';
import photo from './photo';

const store = configureStore({
  reducer: combineReducers({ photo }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
