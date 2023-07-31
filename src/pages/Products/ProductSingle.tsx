import React, { FC } from 'react';
import * as S from './ProductSingle.styled';
import Button from '../../globalComponent/Button';
import { ProductObject } from '../../utils/type';
import { staticText } from '../../utils/staticText';

interface IProps {
  product: ProductObject;
  addToCartFn: React.MouseEventHandler<HTMLButtonElement>;
}

const ProductSingle: FC<IProps> = ({ product, addToCartFn }) => {
  const { title, imageUrl } = product;

  return (
    <S.Product>
      <S.ProductImage>
        <img src={imageUrl} alt={title} />
      </S.ProductImage>
      <h4>{title}</h4>
      <Button $width={'auto'} $height={'30px'} onClick={addToCartFn}>
        {staticText.addToCart}
      </Button>
    </S.Product>
  );
};

export default ProductSingle;
