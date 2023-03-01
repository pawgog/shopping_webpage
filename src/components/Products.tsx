import React, { useContext } from 'react';
import { useAppDispatch } from '../hooks/useStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import * as S from './Products.styled';
import ProductSingle from './ProductSingle';
import Spinner from '../globalComponent/Spinner';
import Error from '../globalComponent/Error';
import useFetchingProducts from '../hooks/useFetchingProducts';
import { addProductsCartAsync } from '../store/action';
import { UrlContext } from '../utils/context';
import { ProductObject } from '../utils/type';
import { staticText } from '../utils/staticText';

const Products = () => {
  const dispatch = useAppDispatch();
  const url = useContext(UrlContext);
  const apiUrl = `${url}/products`;
  const { products, isLoading, isError } = useFetchingProducts(apiUrl);

  const addToCart = (product: ProductObject) => {
    dispatch(addProductsCartAsync(product));
  };

  console.log(products);

  if (isError && !isLoading)
    return (
      <Error>
        <h2>{staticText.error}</h2>
      </Error>
    );

  return (
    <S.Products>
      <S.ProductsTopBar>{staticText.products}</S.ProductsTopBar>
      <S.ProductsBoard>
        <S.ButtonNav to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </S.ButtonNav>
        {isLoading ? (
          <Spinner />
        ) : (
          products.map((product: ProductObject) => (
            <ProductSingle key={product._id} product={product} addToCartFn={() => addToCart(product)} />
          ))
        )}
      </S.ProductsBoard>
    </S.Products>
  );
};

export default Products;
