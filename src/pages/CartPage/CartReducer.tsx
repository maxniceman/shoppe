import {
  CartProduct,
  ActionType,
  ActionAdd,
  ActionRemove,
  ActionIncreaseAmount,
  ActionDecreaseAmount,
} from "./types";

export const cartReducer = (
  cart: CartProduct[],
  action: ActionAdd | ActionRemove | ActionIncreaseAmount | ActionDecreaseAmount
) => {
  switch (action.type) {
    case ActionType.ADD: {
      if (cart.some((p: CartProduct) => p.id === action.payload.id)) {
        return cart;
      } else {
        return [...cart, action.payload];
      }
    }
    case ActionType.REMOVE: {
      return cart.filter((p: CartProduct) => p.id !== action.payload.id);
    }
    case ActionType.INCREASEAMOUNT: {
      const updatedCart = cart.map((p: CartProduct) => {
        if (p.id !== action.payload.id) {
          return p;
        }
        return {
          ...p,
          amount: action.payload.amount + 1,
        };
      });
      return updatedCart;
    }
    case ActionType.DECREASEAMOUNT: {
      const updatedCart = cart.map((p: CartProduct) => {
        if (
          p.id !== action.payload.id ||
          (p.id === action.payload.id && action.payload.amount === 1)
        ) {
          return p;
        }
        return {
          ...p,
          amount: action.payload.amount - 1,
        };
      });
      return updatedCart;
    }
    default: {
      return cart;
    }
  }
};
