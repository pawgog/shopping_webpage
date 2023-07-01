import styled from 'styled-components';

export const HomeStyled = styled.div`
  position: relative;
  width: 100%;
  height: 91.7vh;
  margin-top: -1.7rem;

  &::before {    
    content: "";
    background: url(https://drive.google.com/uc?export=view&id=1xMFqMubhIjE9hX0gQFZET8CZ-l3T2VoX) no-repeat center center fixed; 
    background-size: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
`;

export const HomeContentStyled = styled.div`
  position: relative;
  padding: 0 3rem;
`;

export const SpinnerHomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;