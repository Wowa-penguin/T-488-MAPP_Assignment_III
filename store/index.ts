import { configureStore } from '@reduxjs/toolkit';
import cinemaReducer from './cinemaSlice';
import moviesReducer from './movieSlice';
import upcomingMoviesReducer from './upcomingSlice';

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        cinemas: cinemaReducer,
        upcoming: upcomingMoviesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
