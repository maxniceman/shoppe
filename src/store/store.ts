import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites/favoritesSlice";
import cartReducer from "./cart/cartSlice";
import { favoritesMiddleware } from "./favorites/favoritesMiddleware";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(favoritesMiddleware),
});

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
