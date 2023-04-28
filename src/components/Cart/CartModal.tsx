import React from 'react';
import * as S from './CartModal.styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import Button from '../../globalComponent/Button';
import CartSingle from './CartSingle';
import { ProductObject } from '../../utils/type';

interface IProps {
  cartItems: ProductObject[];
  isModalOpen: boolean;
  handleOpenCart: React.MouseEventHandler<HTMLButtonElement>;
  deleteFromCart: (id: string) => void;
}

const CartModal = ({ cartItems, isModalOpen, handleOpenCart, deleteFromCart }: IProps) => {
  const testFunc = () => {
    return;
  };

  return (
    <S.CartModal isModalOpen={isModalOpen}>
      <Button $width={'auto'} $height={'30px'} onClick={handleOpenCart}>
        <FontAwesomeIcon icon={faLeftLong} />
      </Button>
      <h2>Cart</h2>
      {cartItems.map((item) => {
        return (
          <CartSingle key={item._id} cart={item} addToCartFn={testFunc} deleteFromCartFn={deleteFromCart} />
        );
      })}
      <S.CheckoutBtn>
        <Link to="/cart">Checkout</Link>
      </S.CheckoutBtn>
    </S.CartModal>
  );
};

export default CartModal;
