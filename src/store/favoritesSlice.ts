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

const initialState: { favorites: FavoriteProduct[] } = {
  favorites: initialFavoritesData,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, action: PayloadAction<FavoriteProduct>) => {
      const updLocalStorage = () =>
        localStorage.setItem("favorites", JSON.stringify(state.favorites));

      const indexOfProduct = state.favorites.findIndex(
        (f) => f.id === action.payload.id
      );
      if (indexOfProduct !== -1) {
        state.favorites.splice(indexOfProduct, 1);
        updLocalStorage();
      } else {
        state.favorites.push(action.payload);
        updLocalStorage();
      }
    },
  },
});

export const { actions } = favoritesSlice;

export default favoritesSlice.reducer;
