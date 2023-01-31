import React, { FC, useContext } from 'react';
import * as S from './ProductSingle.styled';
import Button from '../globalComponent/Button';
import { ProductObject } from '../utils/type';
import { UrlContext } from '../utils/context';
import { staticText } from '../utils/staticText';

interface IProps {
  product: ProductObject;
  addToCartFn: React.MouseEventHandler<HTMLButtonElement>;
}

const ProductSingle: FC<IProps> = ({ product, addToCartFn }) => {
  const url = useContext(UrlContext);
  const { title, imageUrl } = product;

  return (
    <S.Product>
      <img src={`${url}${imageUrl}`} alt={title} />
      <h4>{title}</h4>
      <Button $width={'auto'} $height={'30px'} onClick={addToCartFn}>
        {staticText.addToCart}
      </Button>
    </S.Product>
  );
};

export default ProductSingle;
