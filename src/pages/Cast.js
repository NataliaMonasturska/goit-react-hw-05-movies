import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from '../services/Api'
import DefaultImg from '../Images/DefaultImg.jpg';
import { RotatingLines } from 'react-loader-spinner';
import {
  Ul,
  Li,
  Title,
  ContainerImg,
  ContainerTitleCast,
  Img,
  ContainerFlex,
  Loader
} from '../components/styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieCast(movieId)
      .then(data => {
        setMovieCast(data.cast);
      })
      .catch(error => {
        console.error(error);
      }).finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <ContainerFlex>
      {!isLoading && movieCast.length > 0 &&
        (
          <Ul>
            {movieCast.map(c => {
              return (
                <Li key={c.id}>
                  <ContainerImg>
                    {c.profile_path !== null && c.profile_path !== undefined ? (
                      <Img
                        src={`https://image.tmdb.org/t/p/w500${c.profile_path}`}
                        alt={c.name}
                      />
                    ) : (
                      <Img src={DefaultImg} alt={c.name} />
                    )}
                  </ContainerImg>
                  <ContainerTitleCast>
                    <Title>{c.name}</Title>
                    <p>Character: {c.character}</p>
                  </ContainerTitleCast>
                </Li>
              );
            })}
          </Ul>
        )
      }
        {isLoading && (<Loader>
        <RotatingLines
          strokeColor="#3f51b5"
          strokeWidth="5"
          animationDuration="0.75"
          width="150"
          visible={true}
        />
      </Loader>)}
    </ContainerFlex>
  )
}

export default Cast;
