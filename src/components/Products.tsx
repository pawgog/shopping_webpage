import React, { useContext, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import * as S from './Products.styled';
import ProductSingle from './ProductSingle';
import CartModal from './Cart/CartModal';
import Spinner from '../globalComponent/Spinner';
import Error from '../globalComponent/Error';
import useFetchingProducts from '../hooks/useFetchingProducts';
import { addProductsCartAsync } from '../store/action';
import { UrlContext } from '../utils/context';
import { ProductObject } from '../utils/type';
import { staticText } from '../utils/staticText';
import { RootState } from '../store/store';

const Products = () => {
  const dispatch = useAppDispatch();
  const url = useContext(UrlContext);
  const apiUrl = `${url}/products`;
  const apiUrlCart = `${url}/cart`;

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const { products, isLoading: isLoadingProduct, isError: isErrorProduct } = useFetchingProducts(apiUrl);
  const { productsStore } = useAppSelector((state: RootState) => state)

  const addToCart = (product: ProductObject) => {
    dispatch(addProductsCartAsync(product));
  };

  const handleOpenCart = () => {
    setModalOpen((prev) => !prev);
  };

  console.log(products, productsStore);

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
          <S.CircleItems>{productsStore.cart.length}</S.CircleItems>
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
      <CartModal cartItems={productsStore.cart} isModalOpen={isModalOpen} handleOpenCart={handleOpenCart} />
    </S.Products>
  );
};

export default Products;
