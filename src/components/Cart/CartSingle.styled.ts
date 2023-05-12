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
  margin: 0.8rem;
  border: 1px solid ${colors.grey};
  background: ${colors.white};

  & > .cart-image {
    grid-area: 1 / 1 / 2 / 2;
  }

  & > .cart-title {
    grid-area: 1 / 2 / 2 / 3;
    text-align: left;
    padding: 0.3rem;
  }

  & > .cart-buttons {
    grid-area: 2 / 1 / 3 / 3;
  }

  & .cart-buttons__delete {
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 15px;
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
    width: 30px;
    height: 30px;
    margin: 0.4rem;
    padding: 0.4rem;
    background-color: ${colors.white};
    border: 1px solid ${colors.blue};
    border-radius: 4px;
    cursor: pointer;
  }
`;
