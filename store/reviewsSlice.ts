import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Review = { 
    id: string;
    movieId: string;
    text: string;
    rating: number;
    createdAt: string;
};

export type ReviewsState = {
    byMovieId: {
      [movieId: string]: Review[];  
    };
};

const initialState: ReviewsState = {
    byMovieId: {},
};

const STORAGE_KEY = 'movieReviews';

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReview(
            state, action: PayloadAction<{ movieId: string; text: string, rating: number}>
        ) {
            const { movieId, text, rating } = action.payload;
            const newReview: Review = {
                id: `${movieId}-${Date.now()}`,
                movieId,
                text,
                rating,
                createdAt: new Date().toISOString(),
            };

            if (!state.byMovieId[movieId]) {
                state.byMovieId[movieId] = [];
            }

            state.byMovieId[movieId].unshift(newReview);

            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state.byMovieId)).catch(
                (err) => console.warn('Failed to save reviews☹️', err)
            );
        },

        setReviewsFromStorage(
            state, action: PayloadAction<ReviewsState['byMovieId']>
        ) {
            state.byMovieId = action.payload;
        },
    },
});

export const { addReview, setReviewsFromStorage } = reviewsSlice.actions;
export default reviewsSlice.reducer;

export const loadReviews = async (dispatch: any) => {
    try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (json) {
            const parsed = JSON.parse(json) as ReviewsState['byMovieId'];
            dispatch(setReviewsFromStorage(parsed));
        }
    } catch (err) {
        console.warn('Failed to load reviews☹️', err);
    }
};