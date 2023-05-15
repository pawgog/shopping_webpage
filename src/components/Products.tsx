import React, { useContext, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import * as S from './Products.styled';
import ProductSingle from './ProductSingle';
import CartModal from './Cart/CartModal';
import Spinner from '../globalComponent/Spinner';
import Error from '../globalComponent/Error';
import useFetchingProducts from '../hooks/useFetchingProducts';
import { addProductsCartAsync, deleteProductCartAsync, getProductsCartAsync, updateQuantityProductCartAsync } from '../store/action';
import { UrlContext } from '../utils/context';
import { ProductObject } from '../utils/type';
import { staticText } from '../utils/staticText';
import { RootState } from '../store/store';

const Products = () => {
  const dispatch = useAppDispatch();
  const url = useContext(UrlContext);
  const apiUrl = `${url}/products`;

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const { products, isLoading: isLoadingProduct, isError: isErrorProduct } = useFetchingProducts(apiUrl);
  const { cartStore } = useAppSelector((state: RootState) => state);
  const { cart } = cartStore;

  useEffect(() => {
    dispatch(getProductsCartAsync());
  }, [])

  const addToCart = (product: ProductObject) => {
    const isProductExist = cart?.some((item) => item.productId === product.productId);

    if (isProductExist) {
      dispatch(updateQuantityProductCartAsync(product.productId));
    } else {
      dispatch(addProductsCartAsync(product));
    }
  };

  const deleteFromCart = (id: number) => {
    console.log(id);
    
    dispatch(deleteProductCartAsync(id));
  };

  const handleOpenCart = () => {
    setModalOpen((prev) => !prev);
  };

  console.log(products, cartStore);

  if (isErrorProduct && !isLoadingProduct)
    return (
      <Error>
        <h2>{staticText.error}</h2>
      </Error>
    );

  return (
    <S.Products>
      <S.ProductsTopBar>{staticText.products}</S.ProductsTopBar>
      <S.ProductsBoard>
        <S.ButtonNav onClick={handleOpenCart}>
          <S.CircleItems>{cart.length}</S.CircleItems>
          <FontAwesomeIcon icon={faCartShopping} />
        </S.ButtonNav>
        {isLoadingProduct ? (
          <Spinner />
        ) : (
          products.map((product: ProductObject) => (
            <ProductSingle key={product._id} product={product} addToCartFn={() => addToCart(product)} />
          ))
        )}
      </S.ProductsBoard>
      <CartModal cartItems={cart} isModalOpen={isModalOpen} handleOpenCart={handleOpenCart} deleteFromCart={deleteFromCart} />
    </S.Products>
  );
};

export default Products;
