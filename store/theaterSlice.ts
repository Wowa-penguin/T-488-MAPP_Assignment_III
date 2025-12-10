import { fetchTheatersApi } from '@/api/fetchTheaters';
import type { Theater } from '@/models/theaters';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type TheaterState = {
    items: Theater[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
};

const initialState: TheaterState = {
    items: [],
    status: 'idle',
    error: null,
};

export const fetchTheaters = createAsyncThunk<Theater[]>(
    'movies/fetchTheaters',
    async () => {
        const theater = await fetchTheatersApi();
        return theater;
    }
);

const theaterSlice = createSlice({
    name: 'theater',
    initialState,
    reducers: {
        setTheater(state, action: PayloadAction<Theater[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTheaters.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchTheaters.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchTheaters.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Failed to load movies';
            });
    },
});

export const { setTheater } = theaterSlice.actions;
export default theaterSlice.reducer;
