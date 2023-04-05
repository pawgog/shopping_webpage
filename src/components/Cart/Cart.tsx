import React, { useContext } from 'react';
import * as S from './Cart.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { UrlContext } from '../../utils/context';
import useFetchingCart from '../../hooks/useFetchingCart';

const Cart = () => {
  const url = useContext(UrlContext);
  const apiUrlCart = `${url}/cart`;
  const { cartItems } = useFetchingCart(apiUrlCart);

  return (
    <>
      <h2>Cart</h2>
      <S.ButtonBack to="/">
        <FontAwesomeIcon icon={faLeftLong} />
      </S.ButtonBack>
      <S.CartBoard>
        {cartItems.map(({ title, quantity }) => {
          return (
            <S.SingleProduct key={title}>
              <div className="cart-image">
                <img src="https://via.placeholder.com/160" alt={title} />
              </div>
              <div className="cart-title">{title}</div>
              <span>{quantity}</span>
            </S.SingleProduct>
          );
        })}        
      </S.CartBoard>
    </>
  );
};

export default Cart;
