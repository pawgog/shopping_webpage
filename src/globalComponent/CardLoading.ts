import styled, { keyframes } from 'styled-components';

const shine = keyframes`
    to {
      background-position-x: -200%;
    }
`;

const CardLoading = styled.div`
  width: 100%;
  min-height: 255px;
  margin: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s ${shine} linear infinite;
`;

export default CardLoading;
