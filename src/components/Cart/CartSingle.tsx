import React, { FC, useContext } from 'react';
import * as S from './CartSingle.styled';
import { ProductObject } from '../../utils/type';
import { UrlContext } from '../../utils/context';

interface IProps {
  product: ProductObject;
  addToCartFn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  deleteFromCartFn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  deleteSingleItemFromCartFn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CartSingle: FC<IProps> = ({ product, addToCartFn, deleteFromCartFn, deleteSingleItemFromCartFn }) => {
  const url = useContext(UrlContext);
  const { title, imageUrl, prices } = product;
  const itemsInCartLength = prices.length;

  return (
    <S.Cart>
      <img src={`${url}${imageUrl}`} alt={title} />
      <div>{title}</div>
      <div>
        <button onClick={addToCartFn}>+</button>
        <span>{itemsInCartLength}</span>
        <button onClick={deleteSingleItemFromCartFn}>-</button>
        <button onClick={deleteFromCartFn}>X</button>
      </div>
    </S.Cart>
  );
};

export default CartSingle;
