export type PriceObject = {
  amount: number;
  currency: string;
};

export type ProductObject = {
  _id: string;
  productId: number;
  title: string;
  imageUrl: string;
  url: string;
  prices: PriceObject[];
  quantity?: number;
};

export type CartState = {
  cart: ProductObject[];
  pricesSum: PriceObject[];
};

export type Cart = {
  cart: ProductObject[];
  pricesSum: PriceObject[];
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
