import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovie } from '../../components/Api';
import {H1, Img, Ul, Li, Title,ContainerImg, ContainerTitle, ContainerHome} from '../../components/styled'

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovie()
      .then(data => {
        setTrendingMovies(data.results);
        // console.log(data.results);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <ContainerHome>
      {!isLoading && (
        <>
          <H1>Trending today</H1>

          <Ul>
            {trendingMovies.length > 0 &&
              trendingMovies.map(Movie => (
                <Li key={Movie.id}>
                  <Link to={`/movies/${Movie.id}`} state={{ from: location }}>
                    <ContainerImg>
                      <Img
                        src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
                        alt={Movie.title}
                      />
                    </ContainerImg>
                    <ContainerTitle>
                      <Title>{Movie.title}</Title>
                    </ContainerTitle>
                  </Link>
                </Li>
              ))}
          </Ul>
        </>
      )}
    </ContainerHome>
  );
};
export default Home;
