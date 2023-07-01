import styled from 'styled-components';
import { colors } from '../../globalStyle/colors';

export const Cart = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr 0.5fr;
  gap: 0 0.5rem;
  align-items: center;
  text-align: center;
  width: 95%;
  margin: 0.5rem;
  border-bottom: 1px solid ${colors.grey};
  background: ${colors.white};

  & > .cart-image {
    grid-area: 1 / 1 / 2 / 2;
  }

  & > .cart-title {
    grid-area: 1 / 2 / 2 / 3;
    text-align: left;
    padding: 0.3rem;
    font-weight: 500;
  }

  & > .cart-buttons {
    grid-area: 2 / 1 / 3 / 3;
  }

  & .cart-buttons__delete {
    position: absolute;
    top: 0;
    right: 0;
    width: 1rem;
    height: 1rem;
    padding: 0;
    font-size: 0.5rem;
  }

  & img {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    object-fit: cover;
  }

  & button {
    margin: 0.4rem;
    color: ${colors.white};
    background-color: ${colors.blue};
    border: 1px solid ${colors.blue};
    border-radius: 4px;
    cursor: pointer;
  }
`;
