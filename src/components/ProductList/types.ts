export interface IProducts {
  products: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  price: string | number;
  img: string;
}
