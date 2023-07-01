import React, { useRef } from 'react';
import * as S from './Home.styled';
import Spinner from '../../globalComponent/Spinner';
import useOnLoadImages from '../../hooks/useOnLoadImages';

const HomePage = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const imagesLoaded = useOnLoadImages(imgRef);

  return (
    <>
      <S.HomeStyled ref={imgRef}>
        <img src="https://drive.google.com/uc?export=view&id=1xMFqMubhIjE9hX0gQFZET8CZ-l3T2VoX" width={0} height={0} alt="shopping" />
        {imagesLoaded ? (
          <S.HomeContentStyled>
            <h1>Home Page</h1>
          </S.HomeContentStyled>
        ) : (
          <S.SpinnerHomePage>
            <Spinner />
          </S.SpinnerHomePage>
        )}
      </S.HomeStyled>
    </>
    
  );
};

export default HomePage;
