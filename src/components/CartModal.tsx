import React from 'react';
import * as S from './CartModal.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '../globalComponent/Button';

interface IProps {
  handleOpenCart: React.MouseEventHandler<HTMLButtonElement>;
}

const CartModal = ({ handleOpenCart }: IProps) => {
  return (
    <S.CartModal>
      <Button $width={'auto'} $height={'30px'} onClick={handleOpenCart}>
        <FontAwesomeIcon icon={faLeftLong} />
      </Button>
      <h2>Cart</h2>
      <Link to="/cart">Checkout</Link>
    </S.CartModal>
  );
};

export default CartModal;
