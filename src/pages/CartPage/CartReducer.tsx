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
    case ActionType.add: {
      if (cart.find((p: CartProduct) => p.id === action.payload.id)) {
        return cart;
      } else {
        return [...cart, action.payload];
      }
    }
    case ActionType.remove: {
      return cart.filter((p: CartProduct) => p.id !== action.payload.id);
    }
    case ActionType.increaseAmount: {
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
    case ActionType.decreaseAmount: {
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
