import styled from 'styled-components';
import { colors } from '../../globalStyle/colors';

export const ProductContent = styled.div`
  display: flex;
  width: 100%;
  min-height: 300px;
  color: ${colors.white};
  background-color: ${colors.grey};
  margin-bottom: 2rem;
`;

export const ProductContentDetails = styled.div`
  padding: 2rem;

  & button:hover {
    color: ${colors.white};
  }
`;
