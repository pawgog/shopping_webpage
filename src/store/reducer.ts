import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductState, Cart } from '../utils/type';

const initialState: ProductState = {
  cart: {
    items: [],
    summery: [],
  },
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsCartAsync: (state: ProductState, action: PayloadAction<Cart>) => {
      state.cart = action.payload;
    },
    addProductsCartAsync: (state: ProductState, action: PayloadAction<Cart>) => {
      state.cart = action.payload;
    },
    updateQuantityProductCartAsync: (state: ProductState, action: PayloadAction<Cart>) => {
      state.cart = action.payload;
    },
    removeQuantityProductCartAsync: (state: ProductState, action: PayloadAction<Cart>) => {
      state.cart = action.payload;
    },
    deleteProductCartAction: (state: ProductState, action: PayloadAction<Cart>) => {
      state.cart = action.payload;
    },
  },
});

export const {
  getProductsCartAsync: getProductCart,
  addProductsCartAsync: addProductCart,
  updateQuantityProductCartAsync: updateQuantityProductCart,
  removeQuantityProductCartAsync: removeQuantityProductCart,
  deleteProductCartAction: deleteProductCart,
} = productsSlice.actions;

export default productsSlice.reducer;
