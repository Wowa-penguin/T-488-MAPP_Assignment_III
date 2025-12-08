import movies from '@/data/movies.json';
import { Movie } from '@/models/movies';
import { createSlice } from '@reduxjs/toolkit';

type MoviesState = {
    movies: Movie[];
};

const initialState: MoviesState = {
    movies: movies as Movie[],
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        //todo
    },
});

export default moviesSlice.reducer;
