import React, { useContext } from 'react';
import * as S from './Cart.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { UrlContext } from '../../utils/context';
import useFetchingCart from '../../hooks/useFetchingCart';

const Cart = () => {
  const url = useContext(UrlContext);
  const apiUrlCart = `${url}/cart`;
  const { cartItems, pricesSum } = useFetchingCart(apiUrlCart);

  return (
    <>
      <h2>Your Cart</h2>
      <S.ButtonBack to="/">
        <FontAwesomeIcon icon={faLeftLong} />
      </S.ButtonBack>
      <S.CartBoard>
        <S.SingleProduct>
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
              {cartItems.map(({ title, quantity=1, prices }) => {
                return (
                  <tr key={title}>
                    <td><img src="https://via.placeholder.com/160" alt={title} /> {title}</td>
                    <td>{prices[0]?.amount}</td>
                    <td>{quantity}</td>
                    <td>{prices[0]?.amount * quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </S.SingleProduct>
        <p>{pricesSum[0]?.amount}</p>    
      </S.CartBoard>
    </>
  );
};

export default Cart;
