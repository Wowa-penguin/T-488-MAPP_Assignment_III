import { fetchMoviesApi } from '@/api/fetchMovies';
import type { Movie } from '@/models/movies';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type MoviesState = {
    items: Movie[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
};

const initialState: MoviesState = {
    items: [],
    status: 'idle',
    error: null,
};

export const fetchMovies = createAsyncThunk<Movie[]>(
    'movies/fetchMovies',
    async () => {
        const movies = await fetchMoviesApi();
        return movies;
    }
);

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies(state, action: PayloadAction<Movie[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Failed to load movies';
            });
    },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
