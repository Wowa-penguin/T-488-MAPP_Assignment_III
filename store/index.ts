import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieSlice';
import TheaterReducer from './theaterSlice';
import upcomingMoviesReducer from './upcomingSlice';
import favoritesSlice from './favoritesSlice';
import { loadFavorites } from './favoritesSlice';

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        upcoming: upcomingMoviesReducer,
        theater: TheaterReducer,
        favorites: favoritesSlice,
    },
});

loadFavorites(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
