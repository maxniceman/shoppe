import type { Middleware } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { actions } from "./favoritesSlice";

export const favoritesMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (actions.toggleFavorites.match(action)) {
      const favoritesState = store.getState().favorites;
      let newFavorites = [];
      if (favoritesState.some((f) => f.id === action.payload.id)) {
        newFavorites = favoritesState.filter((f) => f.id !== action.payload.id);
      } else {
        newFavorites = favoritesState.concat(action.payload);
      }

      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
    return next(action);
  };
