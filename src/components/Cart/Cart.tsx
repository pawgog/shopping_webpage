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
      <h2>Your Cart</h2>
      <S.ButtonBack to="/">
        <FontAwesomeIcon icon={faLeftLong} />
      </S.ButtonBack>
      <S.CartBoard>
        {cartItems.map(({ title, quantity, prices }) => {
          return (
            <S.SingleProduct key={title}>
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img src="https://via.placeholder.com/160" alt={title} /> {title}</td>
                    <td>{prices[0].amount}</td>
                    <td>{quantity}</td>
                    <td>6000</td>
                  </tr>
                </tbody>
              </table>
            </S.SingleProduct>
          );
        })}        
      </S.CartBoard>
    </>
  );
};

export default Cart;
