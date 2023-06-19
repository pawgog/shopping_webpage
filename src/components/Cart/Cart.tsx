import React, { useContext } from 'react';
import * as S from './Cart.styled';
import { UrlContext } from '../../utils/context';
import { staticText } from '../../utils/staticText';
import useFetchingCart from '../../hooks/useFetchingCart';
import Spinner from '../../globalComponent/Spinner';
import Error from '../../globalComponent/Error';

const columnTable = ['', 'Item', 'Price', 'Quantity', 'Total']

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
      <h2>Your Shopping Cart</h2>
      <S.CartBoard>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <S.TableStyled>
              <li className="table-header">
                {columnTable.map((column: string, index) => <div key={column} className={`col col-${index}`}>{column}</div>)}
              </li>
              {cartItems.map(({ title, quantity=1, prices }) => {
                const [sek] = prices;
                  return (
                    <li key={title} className="table-row">
                      <div className="col col-0"><img src="https://via.placeholder.com/160" alt={title} /></div>
                      <div className="col col-1" >{title}</div>
                      <div className="col col-2" >{sek?.amount} {sek?.currency}</div>
                      <div className="col col-3">{quantity}</div>
                      <div className="col col-4">{sek?.amount * quantity} {sek?.currency}</div>
                    </li>
                  );
                })}
              </S.TableStyled>
              <p>{sek?.amount} {sek?.currency}</p>   
          </>
        )}
      </S.CartBoard>
    </>
  );
};

export default Cart;
