import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/cartSlice";
import { RootState } from "../store/store";

export const useCartStore = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state: RootState) => state.cart);

  const bindActions = useMemo(
    () => bindActionCreators(actions, dispatch),
    [dispatch]
  );

  return { cart, ...bindActions };
};
