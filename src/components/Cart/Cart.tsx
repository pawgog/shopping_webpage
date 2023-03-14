import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import * as S from './Cart.styled';

const Cart = () => {
  return (
    <>
      <h2>Cart</h2>
      <S.ButtonBack to="/">
        <FontAwesomeIcon icon={faLeftLong} />
      </S.ButtonBack>
    </>
  );
};

export default Cart;
