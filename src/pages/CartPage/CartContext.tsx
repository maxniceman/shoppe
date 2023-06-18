import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import {
  CartProduct,
  ActionAdd,
  ActionRemove,
  ActionIncreaseAmount,
  ActionDecreaseAmount,
} from "./types";
import { cartReducer } from "./cartReducer";

export const initialCart: [] = [];
export const CartContext = createContext<CartProduct[] | []>([]);
export const CartDispatchContext = createContext<React.Dispatch<
  ActionAdd | ActionRemove | ActionIncreaseAmount | ActionDecreaseAmount
> | null>(null);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export const useCartDispatch = () => {
  return useContext(CartDispatchContext);
};
