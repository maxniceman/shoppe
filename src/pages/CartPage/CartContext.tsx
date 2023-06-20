import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import {
  CartProduct,
  ActionType,
  ActionIncreaseAmountPayload,
  ActionDecreaseAmountPayload,
} from "./types";
import { cartReducer } from "./cartReducer";

interface createContextInterface {
  cart: CartProduct[] | [];
  addItem: (payload: CartProduct) => void;
  removeItem: (id: number) => void;
  increaseAmount: (payload: ActionIncreaseAmountPayload) => void;
  decreaseAmount: (payload: ActionDecreaseAmountPayload) => void;
}

export const initialCart: [] = [];
export const CartContext = createContext({} as createContextInterface);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const addItem = (payload: CartProduct) => {
    dispatch({
      type: ActionType.add,
      payload: payload,
    });
  };

  const removeItem = (id: number) => {
    dispatch({
      type: ActionType.remove,
      payload: { id },
    });
  };

  const increaseAmount = (payload: ActionIncreaseAmountPayload) => {
    dispatch({
      type: ActionType.increaseAmount,
      payload: payload,
    });
  };

  const decreaseAmount = (payload: ActionDecreaseAmountPayload) => {
    dispatch({
      type: ActionType.decreaseAmount,
      payload: payload,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
