import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from './Api';
import DefaultImg from '../Images/DefaultImg.jpg';
import {
  Ul,
  Li,
  Title,
  ContainerImg,
  ContainerTitleCast,
  Img,
} from '../components/styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId)
      .then(data => {
        setMovieCast(data.cast);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <Ul>
      {movieCast.length > 0 &&
        movieCast.map(c => {
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
  );
};

export default Cast;
