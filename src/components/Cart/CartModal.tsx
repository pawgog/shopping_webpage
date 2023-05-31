import React from 'react';
import * as S from './CartModal.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { ProductObject } from '../../utils/type';
import Button from '../../globalComponent/Button';
import CartSingle from './CartSingle';

interface IProps {
  cartItems: ProductObject[];
  isModalOpen: boolean;
  handleOpenCart: React.MouseEventHandler<HTMLButtonElement>;
  deleteFromCart: (id: number) => void;
}

const CartModal = ({ cartItems, isModalOpen, handleOpenCart, deleteFromCart }: IProps) => {
  return (
    <S.CartModal isModalOpen={isModalOpen}>
      <Button $width={'auto'} $height={'30px'} onClick={handleOpenCart}>
        <FontAwesomeIcon icon={faLeftLong} />
      </Button>
      <h2>Cart</h2>
      {cartItems.map((item) => {
        return (
          <CartSingle key={item._id} cart={item} deleteFromCartFn={deleteFromCart} />
        );
      })}
      <S.CheckoutBtn to="/cart">Checkout</S.CheckoutBtn>
    </S.CartModal>
  );
};

export default CartModal;
