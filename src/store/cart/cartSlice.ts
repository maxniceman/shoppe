import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../../pages/CartPage/types";

const initialState: CartProduct[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (cart, action: PayloadAction<CartProduct>) => {
      const isAlreadyInCart = cart.some((c) => c.id === action.payload.id);
      if (isAlreadyInCart) return;
      else cart.push(action.payload);
    },
    removeProduct: (cart, action: PayloadAction<{ id: number }>) => {
      const index = cart.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) cart.splice(index, 1);
    },
    increaseAmount: (
      cart,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      cart.forEach((p: CartProduct) => {
        if (p.id === action.payload.id) {
          p.amount++;
        }
      });
    },
    decreaseAmount: (
      cart,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      cart.forEach((p: CartProduct) => {
        if (p.id === action.payload.id && action.payload.amount !== 1) {
          p.amount--;
        }
      });
    },
  },
});

export const { actions } = cartSlice;

export default cartSlice.reducer;
