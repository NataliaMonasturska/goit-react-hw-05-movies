import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from '../../components/Api';
import styled from 'styled-components';
import DefaultImg from '../../Images/DefaultImg.jpg';
const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  margin-bottom: 5px;
  object-fit: cover;
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: auto;
  margin: -35px;
  padding: 0;
`;
const Li = styled.li`
  width: 300px;
  height: 525px;
  margin: 35px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
  box-shadow: 14px 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: 14px 25px 40px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
    transform: scale(1.1);
  }
`;
const Title = styled.p`
  text-align: center;
  line-height: 1.3;
  font-size: 20px;
`;

const ContainerImg = styled.div`
  height: 450px;
`;
const ContainerTitleCast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 75px;
`;

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
