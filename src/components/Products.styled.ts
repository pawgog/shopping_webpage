import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../globalStyle/colors';

export const Products = styled.div`
  width: 90%;
  margin: 2rem auto;
  background-color: ${colors.background};
  box-shadow: 1px 1px 15px 5px rgba(12, 12, 12, 0.2);
`;

export const ProductsTopBar = styled.h2`
  margin: 0;
  padding: 0.5rem 1rem;
  text-align: center;
  border-bottom: 1px solid ${colors.black};
`;

export const ProductsBoard = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  width: 100%;
  margin: 0.5rem 0 1rem;
`;

export const ButtonNav = styled(Link)`
  position: fixed;
  top: 2rem;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  background-color: red;
  border-radius: 4rem;
`;
