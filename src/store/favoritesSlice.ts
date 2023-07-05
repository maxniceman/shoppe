import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FavoriteProduct {
  id: number;
  title: string;
  image: string;
}

const initialState: { favorites: FavoriteProduct[] } = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, action: PayloadAction<FavoriteProduct>) => {
      const indexOfProduct = state.favorites.findIndex(
        (f) => f.id === action.payload.id
      );
      if (indexOfProduct !== -1) state.favorites.splice(indexOfProduct, 1);
      else state.favorites.push(action.payload);
    },
  },
});

export const { actions } = favoritesSlice;

export default favoritesSlice.reducer;
