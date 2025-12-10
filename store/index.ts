import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieSlice';
import TheaterReducer from './theaterSlice';
import upcomingMoviesReducer from './upcomingSlice';

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        upcoming: upcomingMoviesReducer,
        theater: TheaterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
