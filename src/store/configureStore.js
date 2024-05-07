import { combineReducers, configureStore } from '@reduxjs/toolkit';

const contador = () => 0;

const store = configureStore({
  reducer: combineReducers(contador),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
