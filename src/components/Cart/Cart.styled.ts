import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonBack = styled(Link)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 1rem;
  left: 3rem;
  font-size: 2rem;
`;

export const CartBoard = styled.div`
  margin: 2rem 0;
`;

export const SingleProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;
