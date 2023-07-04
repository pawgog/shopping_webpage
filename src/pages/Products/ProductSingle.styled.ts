import styled from 'styled-components';
import { deviceMinWidth } from '../../globalStyle/devices';
import { colors } from '../../globalStyle/colors';

export const Product = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 0.5fr 0.5fr;
  gap: 0.5rem 0;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 0.8rem;
  padding: 0.8rem 0.3rem;
  background: ${colors.white};

  & > img {
    position: fixed;
  }

  ${deviceMinWidth.sm`
    width: 100%;
  `}
  ${deviceMinWidth.md`
    width: 44%;
  `}
  ${deviceMinWidth.lg`
    width: 29%;
  `}
  ${deviceMinWidth.xl`
    width: 21%;
  `}

  & h4 {
    margin: 0;
  }
`;

export const ProductImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;

  & img {
    min-height: 255px;
  }

  ${deviceMinWidth.sm`
    & img {
      width: 50%;
      margin: 0 auto;
    }
  `}
  ${deviceMinWidth.md`
    & img {
      width: 100%;
    }
  `}
`;
