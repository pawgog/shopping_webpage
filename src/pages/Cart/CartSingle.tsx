import React, { FC } from 'react';
import * as S from './CartSingle.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../hooks/useStore';
import { removeQuantityProductCartAsync, updateQuantityProductCartAsync } from '../../store/action';
import { ProductObject } from '../../utils/type';

interface IProps {
  cart: ProductObject;
  deleteFromCartFn: (id: number) => void;
}

const CartSingle: FC<IProps> = ({ cart, deleteFromCartFn }) => {
  const dispatch = useAppDispatch();
  const { title, productId, quantity=0 } = cart;

  const updateToCartFn = (id: number, quantity: number) => {
    dispatch(updateQuantityProductCartAsync(id, quantity));
  };

  const removeFromCartFn = (id: number, quantity: number) => {
    dispatch(removeQuantityProductCartAsync(id, quantity));
  };

  console.log('cart single', cart);

  return (
    <S.Cart>
      <div className="cart-image">
        <img src="https://via.placeholder.com/260" alt={title} />
      </div>
      <div className="cart-title">{title}</div>
      <div className="cart-buttons">
        <button onClick={() => updateToCartFn(productId, quantity)}>+</button>
        <span>{quantity}</span>
        <button onClick={() => removeFromCartFn(productId, quantity)}>-</button>
      </div>
      <div><button className="cart-buttons__delete" onClick={() => deleteFromCartFn(productId)}><FontAwesomeIcon icon={faTrash} /></button></div>
    </S.Cart>
  );
};

export default CartSingle;
