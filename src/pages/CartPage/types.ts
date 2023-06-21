export type CartProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
};

export enum ActionType {
  ADD = "add",
  REMOVE = "remove",
  INCREASEAMOUNT = "increase-amount",
  DECREASEAMOUNT = "decrease-amount",
}

export interface ActionRemovePayload {
  id: number;
}

export interface ActionIncreaseAmountPayload {
  id: number;
  amount: number;
}

export interface ActionDecreaseAmountPayload {
  id: number;
  amount: number;
}

export interface ActionAdd {
  type: ActionType.ADD;
  payload: CartProduct;
}

export interface ActionRemove {
  type: ActionType.REMOVE;
  payload: ActionRemovePayload;
}

export interface ActionIncreaseAmount {
  type: ActionType.INCREASEAMOUNT;
  payload: ActionIncreaseAmountPayload;
}

export interface ActionDecreaseAmount {
  type: ActionType.DECREASEAMOUNT;
  payload: ActionDecreaseAmountPayload;
}
