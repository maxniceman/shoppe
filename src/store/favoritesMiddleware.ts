import type { Middleware, Store } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const favoritesMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);
    if (action.type?.startsWith("favorites/")) {
      const favoritesState = store.getState().favorites.favorites;
      localStorage.setItem("favorites", JSON.stringify(favoritesState));
    }
    return result;
  };
