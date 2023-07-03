import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as cartActions } from "../store/cartSlice";
import { actions as favoriteActions } from "../store/favoritesSlice";

const rootActions = {
  ...cartActions,
  ...favoriteActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
