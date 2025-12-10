import { fetchUpcomingMoviesApi } from '@/api/fetchUpcomingMovies';
import type { Movie } from '@/models/movies';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type UpComingMoviesState = {
    items: Movie[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
};

const initialState: UpComingMoviesState = {
    items: [],
    status: 'idle',
    error: null,
};

export const fetchUpcomingMovies = createAsyncThunk<Movie[]>(
    'upcoming/fetchUpcomingMovies',
    async () => {
        const upcomingMovies = await fetchUpcomingMoviesApi();
        return upcomingMovies;
    }
);

const upcomingMoviesSlice = createSlice({
    name: 'upcomingMovies',
    initialState,
    reducers: {
        //
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpcomingMovies.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchUpcomingMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error =
                    action.error.message ?? 'Failed to load upcoming movies';
            });
    },
});

export default upcomingMoviesSlice.reducer;
