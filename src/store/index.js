import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import movieReducer from './slice/movieSlice';
import favoriteReducer from './slice/favoriteSlice';
import nottificationReducer from './slice/nottificationSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: movieReducer,
    favorites: favoriteReducer,
    nottification: nottificationReducer,
  },
});