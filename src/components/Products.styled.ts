import styled from 'styled-components';
import { colors } from '../globalStyle/colors';

export const Products = styled.div`
  width: 90%;
  background-color: ${colors.background};
  box-shadow: 1px 1px 15px 5px rgba(12, 12, 12, 0.2);
`;

export const ProductsBoard = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  width: 100%;
  margin: 0.5rem 0 1rem;
`;

export const ButtonNav = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 6rem;
  right: 1rem;
  width: 4.5rem;
  height: 4.5rem;
  font-size: 1.5rem;
  border-radius: 4rem;
  color: ${colors.white};
  background-color: ${colors.grey};
  cursor: pointer;
  &:hover {
    color: ${colors.white};
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 4rem;
    z-index: -1;
    transition: all 0.25s ease;
  }
  &::before {
    transition-duration: 0.5s;
    box-shadow: inset 0 0 0 0px ${colors.green};
  }
  &:hover::before {
    box-shadow: inset 0 0 0 60px ${colors.green};
  }
`;

export const CircleItems = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -1rem;
  right: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 4rem;
  background-color: ${colors.red};
`;
