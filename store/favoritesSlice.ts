import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type FavoritesState = {
  movieIds: string[];
};

const initialState: FavoritesState = {
  movieIds: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) {
      const id = action.payload;

      if (state.movieIds.includes(id)) {
        state.movieIds = state.movieIds.filter((x) => x !== id);
      } else {
        state.movieIds.push(id);
      }

      AsyncStorage.setItem('favorites', JSON.stringify(state.movieIds)).catch(
        (err) => {
          console.warn('Failed to save favorites', err);
        }
      );
    },

    setFavoritesFromStorage(state, action: PayloadAction<string[]>) {
      state.movieIds = action.payload;
    },
  },
});

export const { toggleFavorite, setFavoritesFromStorage } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;

export const loadFavorites = async (dispatch: any) => {
  try {
    const json = await AsyncStorage.getItem('favorites');
    if (json) {
      const parsed = JSON.parse(json) as string[];
      dispatch(setFavoritesFromStorage(parsed));
    }
  } catch (err) {
    console.warn('Failed to load favorites', err);
  }
};
