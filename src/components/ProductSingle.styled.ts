import styled from 'styled-components';
import device from '../globalStyle/devices';
import { colors } from '../globalStyle/colors';

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

  & img {
    min-height: 255px;
  }

  ${device.sm`
    width: 100%;

    & img {
      width: 50%;
      margin: 0 auto;
    }
  `}
  ${device.md`
    width: 44%;

    & img {
      width: 100%;
    }
  `}
  ${device.lg`
    width: 29%;
  `}
  ${device.xl`
    width: 21%;
  `}

  & h4 {
    margin: 0;
  }
`;

export const CardLoadingBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
