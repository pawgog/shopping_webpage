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
    getProductsCartAsync: (state: CartState, action: PayloadAction<Cart>) => {
      state.cart = action.payload.cart
      state.pricesSum = action.payload.pricesSum
    },
    addProductsCartAsync: (state, action: PayloadAction<Cart>) => {
      state.cart = action.payload.cart
      state.pricesSum = action.payload.pricesSum
    },
    updateQuantityProductCartAsync: (state: CartState, action: PayloadAction<Cart>) => {
      state = action.payload;
    },
    removeQuantityProductCartAsync: (state: CartState, action: PayloadAction<Cart>) => {
      state = action.payload;
    },
    deleteProductCartAction: (state: CartState, action: PayloadAction<Cart>) => {
      state = action.payload;
    }
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
