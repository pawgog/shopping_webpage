import { useState, useEffect } from 'react';
import { ProductObject } from '../utils/type';

const useFetchingProducts = (apiUrl: string) => {
  const [products, setProducts] = useState<ProductObject[]>([]);
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
        setProducts(products);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, [apiUrl]);

  return { products, isLoading, isError };
};

export default useFetchingProducts;
