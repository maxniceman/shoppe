import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../pages/CartPage/types";

const initialState: { cart: CartProduct[] } = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      const isAlreadyInCart = state.cart.some(
        (c) => c.id === action.payload.id
      );
      if (isAlreadyInCart) return;
      else state.cart.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.cart.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) state.cart.splice(index, 1);
    },
    increaseAmount: (
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      state.cart.forEach((p: CartProduct) => {
        if (p.id === action.payload.id) {
          p.amount++;
        }
      });
    },
    decreaseAmount: (
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      state.cart.forEach((p: CartProduct) => {
        if (p.id === action.payload.id && action.payload.amount !== 1) {
          p.amount--;
        }
      });
    },
  },
});

export const { actions } = cartSlice;

export default cartSlice.reducer;
