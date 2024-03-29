import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, Cart } from '../utils/type';

const initialState: CartState = {
  cart: [
    {
      _id: '',
      productId: 0,
      quantity: 0,
      title: '',
      imageUrl: '',
      url: '',
      prices: []
    }
  ],
  pricesSum: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getProductsCartAsync: (state: CartState, action: PayloadAction<Cart>) => ({
      ...state,
      cart: action.payload.cart,
      pricesSum: action.payload.pricesSum
    }),
    addProductsCartAsync: (state, action: PayloadAction<Cart>) => ({
      ...state,
      cart: action.payload.cart,
      pricesSum: action.payload.pricesSum
    }),
    updateQuantityProductCartAsync: (state: CartState, action: PayloadAction<Cart>) => ({
      ...state,
      cart: action.payload.cart,
      pricesSum: action.payload.pricesSum
    }),
    removeQuantityProductCartAsync: (state: CartState, action: PayloadAction<Cart>) => ({
      ...state,
      cart: action.payload.cart,
      pricesSum: action.payload.pricesSum
    }),
    deleteProductCartAction: (state: CartState, action: PayloadAction<Cart>) => ({
      ...state,
      cart: action.payload.cart,
      pricesSum: action.payload.pricesSum
    }),
  }
});

export const {
  getProductsCartAsync: getProductCart,
  addProductsCartAsync: addProductCart,
  updateQuantityProductCartAsync: updateQuantityProductCart,
  removeQuantityProductCartAsync: removeQuantityProductCart,
  deleteProductCartAction: deleteProductCart
} = cartSlice.actions;

export default cartSlice.reducer;
