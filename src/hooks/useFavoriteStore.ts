import { bindActionCreators } from "@reduxjs/toolkit";
import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FavoriteProduct, actions } from "../store/favoritesSlice";
import { RootState } from "../store/store";

export const useFavoriteStore = () => {
  const dispatch = useDispatch();

  const { favorites } = useSelector((state: RootState) => state.favorites);

  const checkIfProductInFavorites = useCallback(
    (id: number) => {
      return favorites.some((f: FavoriteProduct) => f.id === id);
    },
    [favorites]
  );

  const bindActions = useMemo(
    () => bindActionCreators(actions, dispatch),
    [dispatch]
  );

  return { favorites, ...bindActions, checkIfProductInFavorites };
};
