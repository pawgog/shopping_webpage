import styled from 'styled-components';
import { colors } from '../../globalStyle/colors';

export const CartBoard = styled.div`
  width: 85%;
  margin: 2rem 0;
`;

export const TableStyled = styled.ul`
  padding: 0;

  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.2rem;
    padding: 1rem 1.5rem;
    margin-bottom: 2rem;
  }
  & .table-header {
    color: ${colors.white};
    background-color: ${colors.grey};
    font-size: 1rem;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.03rem;
  }
  & .table-row {
    background-color: ${colors.white};
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
  }
  & .col-0 {
    flex-basis: 25%;
  }
  & .col-1 {
    flex-basis: 35%;
    text-align: center;
  }
  & .col-2 {
    flex-basis: 15%;
    text-align: center;
  }
  & .col-3 {
    flex-basis: 10%;
    text-align: center;
  }
  .col-4 {
    flex-basis: 15%;
    text-align: center;
  }
`;