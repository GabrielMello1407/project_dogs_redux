import { combineReducers, configureStore } from '@reduxjs/toolkit';
import photo from './photo';
import token from './token';
import user from './user';

const store = configureStore({
  reducer: combineReducers({ photo, token, user }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
