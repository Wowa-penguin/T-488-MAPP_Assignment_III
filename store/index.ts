import { configureStore } from '@reduxjs/toolkit';
import cinemaReducer from './cinemaSlice';
import moviesReducer from './movieSlice';

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        cinemas: cinemaReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
