import React, { FC, useRef } from 'react';
import * as S from './ProductSingle.styled';
import Button from '../globalComponent/Button';
import useOnLoadImages from '../hooks/useOnLoadImages';
import { ProductObject } from '../utils/type';
import { staticText } from '../utils/staticText';

interface IProps {
  product: ProductObject;
  addToCartFn: React.MouseEventHandler<HTMLButtonElement>;
}

const ProductSingle: FC<IProps> = ({ product, addToCartFn }) => {
  const productRef = useRef<HTMLDivElement>(null);
  const imagesLoaded = useOnLoadImages(productRef);
  const { title } = product;

  return (
    <S.Product ref={productRef}>
      <img src={imagesLoaded ? 'https://via.placeholder.com/560' : '../assets/blurred.jpg'} alt={title} />
      <h4>{title}</h4>
      <Button $width={'auto'} $height={'30px'} onClick={addToCartFn}>
        {staticText.addToCart}
      </Button>
    </S.Product>
  );
};

export default ProductSingle;
