import React, { FC } from 'react';
import * as S from './CartSingle.styled';
import { ProductObject } from '../../utils/type';
// import { UrlContext } from '../../utils/context';

interface IProps {
  cart: ProductObject;
  addToCartFn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  deleteFromCartFn: (id: string) => void;
  // deleteSingleItemFromCartFn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CartSingle: FC<IProps> = ({ cart, addToCartFn, deleteFromCartFn }) => {
  // const url = useContext(UrlContext);
  const { title, quantity } = cart;

  console.log('cart single', cart);

  return (
    <S.Cart>
      {/* <img src={`${url}${imageUrl}`} alt={title} /> */}
      <div className="cart-image">
        <img src="https://via.placeholder.com/260" alt={title} />
      </div>
      <div className="cart-title">{title}</div>
      <div className="cart-buttons">
        <button onClick={addToCartFn}>+</button>
        <span>{quantity}</span>
        {/* <button onClick={deleteSingleItemFromCartFn}>-</button> */}
        <button onClick={() => deleteFromCartFn(cart._id)}>X</button>
      </div>
    </S.Cart>
  );
};

export default CartSingle;
