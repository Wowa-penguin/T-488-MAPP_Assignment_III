import type { Cinema, Movie } from '@/models/movies';
import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies } from './movieSlice';

type CinemaState = {
    cinemas: Cinema[];
};

const initialState: CinemaState = {
    cinemas: [],
};

const cinemasSlice = createSlice({
    name: 'cinemas',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            const movies: Movie[] = action.payload;
            const map = new Map<number, Cinema>();

            movies.forEach((movie) => {
                movie.showtimes.forEach((showtime) => {
                    const cinema = showtime.cinema;
                    if (!map.has(cinema.id)) {
                        map.set(cinema.id, cinema);
                    }
                });
            });

            state.cinemas = Array.from(map.values());
        });
    },
});

export default cinemasSlice.reducer;
