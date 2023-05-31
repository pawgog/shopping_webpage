import React, { useContext } from 'react';
import * as S from './Cart.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { UrlContext } from '../../utils/context';
import { staticText } from '../../utils/staticText';
import useFetchingCart from '../../hooks/useFetchingCart';
import Spinner from '../../globalComponent/Spinner';
import Error from '../../globalComponent/Error';

const columnTable = ['Item', 'Price', 'Quantity', 'Total']

const Cart = () => {
  const url = useContext(UrlContext);
  const apiUrlCart = `${url}/cart`;
  const { cartItems, pricesSum, isLoading, isError } = useFetchingCart(apiUrlCart);
  const [sek] = pricesSum;

  if (isLoading) {
    <Spinner />
  }
  if (isError && !isLoading)
  return (
    <Error>
      <h2>{staticText.error}</h2>
    </Error>
  );

  return (
    <>
      <h2>Your Cart</h2>
      <S.ButtonBack to="/">
        <FontAwesomeIcon icon={faLeftLong} />
      </S.ButtonBack>
      <S.CartBoard>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <S.SingleProduct>
              <table>
                <thead>
                  <tr>
                    {columnTable.map((column: string) => <th key={column}>{column}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(({ title, quantity=1, prices }) => {
                    const [sek] = prices;
                    return (
                      <tr key={title}>
                        <td><img src="https://via.placeholder.com/160" alt={title} /> {title}</td>
                        <td>{sek?.amount}</td>
                        <td>{quantity}</td>
                        <td>{sek?.amount * quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </S.SingleProduct>
            <p>{sek?.amount}</p>   
          </>
        )}
      </S.CartBoard>
    </>
  );
};

export default Cart;
