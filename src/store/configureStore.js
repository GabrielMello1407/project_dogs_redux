import { combineReducers, configureStore } from '@reduxjs/toolkit';
import photo from './photo';
import token from './token';
import user from './user';
import photoPost from './photoPost';
import ui from './ui';
import feed from './feed';

const store = configureStore({
  reducer: combineReducers({ photo, photoPost, token, user, feed, ui }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
