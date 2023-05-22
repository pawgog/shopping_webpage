import React, { FC } from 'react';
import { useAppDispatch } from '../../hooks/useStore';
import { removeQuantityProductCartAsync, updateQuantityProductCartAsync } from '../../store/action';
import { ProductObject } from '../../utils/type';
import * as S from './CartSingle.styled';
// import { UrlContext } from '../../utils/context';

interface IProps {
  cart: ProductObject;
  deleteFromCartFn: (id: number) => void;
}

const CartSingle: FC<IProps> = ({ cart, deleteFromCartFn }) => {
  // const url = useContext(UrlContext);
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
      {/* <img src={`${url}${imageUrl}`} alt={title} /> */}
      <div className="cart-image">
        <img src="https://via.placeholder.com/260" alt={title} />
      </div>
      <div className="cart-title">{title}</div>
      <div className="cart-buttons">
        <button onClick={() => updateToCartFn(productId, quantity)}>+</button>
        <span>{quantity}</span>
        <button onClick={() => removeFromCartFn(productId, quantity)}>-</button>
        <button className="cart-buttons__delete" onClick={() => deleteFromCartFn(productId)}><span>X</span></button>
      </div>
    </S.Cart>
  );
};

export default CartSingle;
