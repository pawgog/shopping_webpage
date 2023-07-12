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
        <img
          src="https://drive.google.com/uc?export=view&id=1gjnttGlYhtW0X6uMaPmQb66vjnR5d51c"
          width={0}
          height={0}
          alt="shopping"
        />
        {imagesLoaded ? (
          <S.HomeContentStyled>
            <S.HomeBoxStyled>
              <h1>Home Page</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium illo est totam eaque laboriosam
                magnam a similique perferendis reiciendis quo ullam iusto laudantium, deserunt obcaecati. Illum facere
                possimus nesciunt magnam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, similique
                earum? Deserunt maiores eos consectetur sit repellendus ab fuga quas eaque! Alias natus sunt maxime
                pariatur aut fuga quae vitae?
              </p>
              <S.MoreProductsBtn to="/products">See our products</S.MoreProductsBtn>
            </S.HomeBoxStyled>
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
