import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieSlice';
import TheaterReducer from './theaterSlice';
import upcomingMoviesReducer from './upcomingSlice';
import favoritesSlice from './favoritesSlice';
import { loadFavorites } from './favoritesSlice';
import reviewsReducer, { loadReviews } from './reviewsSlice';

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        upcoming: upcomingMoviesReducer,
        theater: TheaterReducer,
        favorites: favoritesSlice,
        reviews: reviewsReducer,
    },
});

loadFavorites(store.dispatch);
loadReviews(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
