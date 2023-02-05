import React, { FC } from 'react';
import * as S from './ProductSingle.styled';
import Button from '../globalComponent/Button';
import { ProductObject } from '../utils/type';
import { staticText } from '../utils/staticText';

interface IProps {
  product: ProductObject;
  addToCartFn: React.MouseEventHandler<HTMLButtonElement>;
}

const ProductSingle: FC<IProps> = ({ product, addToCartFn }) => {
  const { title } = product;

  return (
    <S.Product>
      <img src="https://via.placeholder.com/560" alt={title} />
      <h4>{title}</h4>
      <Button $width={'auto'} $height={'30px'} onClick={addToCartFn}>
        {staticText.addToCart}
      </Button>
    </S.Product>
  );
};

export default ProductSingle;
