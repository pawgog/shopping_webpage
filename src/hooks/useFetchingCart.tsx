import { useState, useEffect } from 'react';
import { ProductObject, PriceObject } from '../utils/type';

const useFetchingCart = (apiUrl: string) => {
  const [cartItems, setCartItems] = useState<ProductObject[]>([]);
  const [pricesSum, setPricesSum] = useState<PriceObject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    fetch(apiUrl)
      .then((response) =>
        response.ok
          ? response.json()
          : Promise.reject(`Cannot communicate with the mocked REST API server (${response.statusText})`)
      )
      .then((products) => {
        const [result] = products;
        console.log(result);

        setCartItems(result.cart);
        setPricesSum(result.pricesSum);
      })
      .catch((err) => {
        console.log('useFetchingCart error', err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, [apiUrl]);

  return { cartItems, pricesSum, isLoading, isError };
};

export default useFetchingCart;
