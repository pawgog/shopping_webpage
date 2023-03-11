import React from 'react';
import * as S from './CartModal.styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import Button from '../globalComponent/Button';
import { ProductObject } from '../utils/type';

interface IProps {
  cartItems: ProductObject[];
  isModalOpen: boolean;
  handleOpenCart: React.MouseEventHandler<HTMLButtonElement>;
}

const CartModal = ({ cartItems, isModalOpen, handleOpenCart }: IProps) => {
  return (
    <S.CartModal isModalOpen={isModalOpen}>
      <Button $width={'auto'} $height={'30px'} onClick={handleOpenCart}>
        <FontAwesomeIcon icon={faLeftLong} />
      </Button>
      <h2>Cart</h2>
      {cartItems.map(({ _id, title }) => {
        return <h5 key={_id}>{title}</h5>;
      })}
      <Link to="/cart">Checkout</Link>
    </S.CartModal>
  );
};

export default CartModal;
