import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FavoriteProduct {
  id: number;
  title: string;
  image: string;
}

const localStorageFavorites = localStorage.getItem("favorites");
const initialFavoritesData = !!localStorageFavorites
  ? JSON.parse(localStorageFavorites)
  : [];

const initialState: FavoriteProduct[] = initialFavoritesData;

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (favorites, action: PayloadAction<FavoriteProduct>) => {
      const indexOfProduct = favorites.findIndex(
        (f) => f.id === action.payload.id
      );
      if (indexOfProduct !== -1) {
        favorites.splice(indexOfProduct, 1);
      } else {
        favorites.push(action.payload);
      }
    },
  },
});

export const { actions } = favoritesSlice;

export default favoritesSlice.reducer;
