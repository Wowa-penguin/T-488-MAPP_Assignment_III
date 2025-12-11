import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type FavoritesState = {
  movieIds: string[];
};

const initialState: FavoritesState = {
  movieIds: [],
};

const STORAGE_KEY = 'favorites';

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

      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state.movieIds)).catch(
        (err) => {
          console.warn('Failed to save favorites', err);
        }
      );
    },

    setFavoritesFromStorage(state, action: PayloadAction<string[]>) {
      state.movieIds = action.payload;
    },

    reorderFavorites(
      state,
      action: PayloadAction<{ fromIndex: number; toIndex: number }>
    ) {
      const { fromIndex, toIndex } = action.payload;

      if (
        fromIndex < 0 ||
        fromIndex >= state.movieIds.length ||
        toIndex < 0 ||
        toIndex >= state.movieIds.length
      ) {
        return;
      }

      const updated = [...state.movieIds];
      const [moved] = updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, moved);
      state.movieIds = updated;

      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state.movieIds)).catch(
        (err) => {
          console.warn('Failed to save favorites order', err);
        }
      );
    },
  },
});

export const {
  toggleFavorite,
  setFavoritesFromStorage,
  reorderFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;

export const loadFavorites = async (dispatch: any) => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    if (json) {
      const parsed = JSON.parse(json) as string[];
      dispatch(setFavoritesFromStorage(parsed));
    }
  } catch (err) {
    console.warn('Failed to load favorites', err);
  }
};
