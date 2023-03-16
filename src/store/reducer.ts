import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductState, Cart } from '../utils/type';

const initialState: ProductState = {
  cart: [
    {
      _id: 0,
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

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsCartAsync: (state: ProductState, action: PayloadAction<Cart>) => {
      state = action.payload;
    },
    addProductsCartAsync: (state: ProductState, action: PayloadAction<Cart>) => {
      state = action.payload;
    },
    updateQuantityProductCartAsync: (state: ProductState, action: PayloadAction<Cart>) => {
      state = action.payload;
    },
    removeQuantityProductCartAsync: (state: ProductState, action: PayloadAction<Cart>) => {
      state = action.payload;
    },
    deleteProductCartAction: (state: ProductState, action: PayloadAction<Cart>) => {
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
} = productsSlice.actions;

export default productsSlice.reducer;
