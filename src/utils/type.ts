type PriceObject = {
  amount: number;
  currency: string;
};

export type ProductObject = {
  id: number;
  title: string;
  imageUrl: string;
  url: string;
  prices: PriceObject[];
};

export type ProductState = {
  cart: Cart;
};

export type Cart = {
  items: Item[];
  summery: PriceObject[];
};

export type Item = {
  product: ProductObject;
  quantity: number;
};

type Action = {
  type: string;
  payload?: any;
};

export type Dispatch = (action: Action) => void;
