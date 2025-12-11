import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import asyncStorage from '@react-native-async-storage/async-storage';

export interface FavoritesState {
    movieIds: string[];
}

const initialState: FavoritesState = {
    movieIds: [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<string>) {
            const id = action.payload;
            if (!state.movieIds.includes(id)) {
                state.movieIds.push(id);
            }
        },
        removeFavortie(state, action: PayloadAction<string>) {
            const id = action.payload;
            state.movieIds = state.movieIds.filter((movieId) => movieId !== id);
        },
        toggleFavorite(state, action: PayloadAction<string>) {
            const id = action.payload;
            if (state.movieIds.includes(id)) {
                state.movieIds = state.movieIds.filter((movieId) => movieId !== id);
            } else {
                state.movieIds.push(id);
            }
        },
        setFavorties(state, action: PayloadAction<string[]>) {
            state.movieIds = action.payload;
        },
    },
});

export const {
    addFavorite,
    removeFavortie,
    toggleFavorite,
    setFavorties,
} = favoritesSlice.actions;

export default favoritesSlice.reducer