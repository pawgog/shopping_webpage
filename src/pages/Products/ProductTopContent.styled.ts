import styled from 'styled-components';
import { deviceMaxWidth } from '../../globalStyle/devices';
import { colors } from '../../globalStyle/colors';

export const ProductContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 300px;
  color: ${colors.white};
  background-color: ${colors.grey};
  margin-bottom: 2rem;

  ${deviceMaxWidth.md`
    flex-direction: column;
    align-items: center;
  `}
`;

export const ProductContentDetails = styled.div`
  width: 80%;
  padding: 2rem;

  & > p {
    width: 80%;
  }

  & button:hover {
    color: ${colors.white};
  }
`;

export const ProductContentImage = styled(ProductContentDetails)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: auto;
  max-height: 300px;

  ${deviceMaxWidth.md`
    & img {
      width: 100%;
    }
  `}
`;
