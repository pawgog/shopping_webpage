import styled from 'styled-components';
import { colors } from '../../globalStyle/colors';

export const Cart = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.5fr 1fr 0.6fr;
  grid-template-rows: 0.5fr;
  gap: 0 0.5rem;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 0.8rem;
  background: ${colors.white};

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
