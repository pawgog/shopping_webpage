import React, { FC, useRef } from 'react';
import * as S from './ProductTopContent.styled';
import Button from '../../globalComponent/Button';
import CardLoading from '../../globalComponent/CardLoading';
import useOnLoadImages from '../../hooks/useOnLoadImages';
import { ProductObject } from '../../utils/type';
import { staticText } from '../../utils/staticText';

interface IProps {
  product: ProductObject;
  addToCartFn: React.MouseEventHandler<HTMLButtonElement>;
}

const ProductTopContent: FC<IProps> = ({ product, addToCartFn }) => {
  const productRef = useRef<HTMLDivElement>(null);
  const imagesLoaded = useOnLoadImages(productRef);
  const { title, imageUrl } = product;

  return (
    <S.ProductContent>
      <S.ProductContentDetails>
        <h1>{title || ''}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur iusto eligendi quaerat, animi
          perspiciatis, sed enim eos ex ab culpa, vero quod officia voluptas assumenda nulla sunt deserunt aliquam!
        </p>
        <Button $width={'auto'} $height={'30px'} onClick={addToCartFn}>
          {staticText.addToCart}
        </Button>
      </S.ProductContentDetails>
      <S.ProductContentImage ref={productRef}>
        <img src={imageUrl} alt={title} width={0} height={0} />
        {imagesLoaded ? <img src={imageUrl} alt={title} /> : <CardLoading />}
      </S.ProductContentImage>
    </S.ProductContent>
  );
};

export default ProductTopContent;
