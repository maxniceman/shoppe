export type CartProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
};

export enum ActionType {
  add = "add",
  remove = "remove",
  increaseAmount = "increase-amount",
  decreaseAmount = "decrease-amount",
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
  type: ActionType.add;
  payload: CartProduct;
}

export interface ActionRemove {
  type: ActionType.remove;
  payload: ActionRemovePayload;
}

export interface ActionIncreaseAmount {
  type: ActionType.increaseAmount;
  payload: ActionIncreaseAmountPayload;
}

export interface ActionDecreaseAmount {
  type: ActionType.decreaseAmount;
  payload: ActionDecreaseAmountPayload;
}
