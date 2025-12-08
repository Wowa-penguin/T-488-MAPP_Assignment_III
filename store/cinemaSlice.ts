import movies from '@/data/movies.json';
import { Cinema } from '@/models/movies';
import { createSlice } from '@reduxjs/toolkit';

type CinemaState = {
    cinemas: Cinema[];
};

const extractCinemas = (): Cinema[] => {
    const map = new Map<number, Cinema>();

    movies.forEach((movie) => {
        movie.showtimes.forEach((showtime) => {
            const cinema = showtime.cinema;
            if (!map.has(cinema.id)) {
                map.set(cinema.id, cinema);
            }
        });
    });

    return Array.from(map.values());
};

const initialState: CinemaState = {
    cinemas: extractCinemas(),
};

const cinemasSlice = createSlice({
    name: 'cinemas',
    initialState,
    reducers: {
        //todo
    },
});

// export const { setCinemas, addCinema } = cinemasSlice.actions;
export default cinemasSlice.reducer;
