import React, { FC, useRef } from 'react';
import * as S from './ProductTopContent.styled';
import { ProductObject } from '../../utils/type';
import CardLoading from '../../globalComponent/CardLoading';
import useOnLoadImages from '../../hooks/useOnLoadImages';

interface IProps {
  product: ProductObject;
}

const ProductTopContent: FC<IProps> = ({ product }) => {
  const productRef = useRef<HTMLDivElement>(null);
  const imagesLoaded = useOnLoadImages(productRef);
  const { title, imageUrl } = product;

  return (
    <S.ProductContent>
      <div>
        <h3>{title || ''}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur iusto eligendi quaerat, animi
          perspiciatis, sed enim eos ex ab culpa, vero quod officia voluptas assumenda nulla sunt deserunt aliquam!
        </p>
      </div>
      <div ref={productRef}>
        <img src={imageUrl} alt={title} width={0} height={0} />
        {imagesLoaded ? <img src={imageUrl} alt={title} /> : <CardLoading />}
      </div>
    </S.ProductContent>
  );
};

export default ProductTopContent;
