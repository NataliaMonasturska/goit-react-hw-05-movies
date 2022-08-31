import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getMovieDetails } from '../../components/Api';
import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';
const Scrolling = require('react-scroll');
const scroll = Scrolling.animateScroll;
const GoBack = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: #87cefa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: black;
    color: #87cefa;
  }
`;
const Container = styled.div`
  width: 1870px;
`;
const ContainerImg = styled.div`
  height: 450px;
  width: 300px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  margin-bottom: 5px;
  object-fit: cover;
`;

const About = styled.div`
  width: 1000px;
  margin-left: 20px;
`;
const ContainerImgAndAbout = styled.div`
  display: flex;
  margin-top: 20px;
  border: 1px solid black;
  padding: 20px;
  box-shadow: 14px 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  margin-bottom: 50px;
  /* width:100%; */
`;
const TitleDetails = styled.h2`
  font-weight: 600;
  margin-bottom: 20px;
`;
const Text = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const Genres = styled.p`
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const GenresList = styled.ul`
  display: flex;
  padding: 0;
`;
const Genre = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;
const AdditionalList = styled.ul`
  display: flex;
  padding: 0;
`;

const AdditionalInformationContainer = styled.div`
  border: 1px solid black;
  padding: 20px;
  box-shadow: 14px 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 50px;
`;
const ItemCastReviews = styled.li`
  font-weight: 400;
  font-size: 24px;
  :first-child {
    margin-right: 20px;
  }
`;
const StyledLink = styled(NavLink)`
  &.active {
    color: #dc143c;
  }
`;
const Loader = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const ContainerOutlet = styled.div`
  display: flex;
  align-items: center;
`;
const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [releaseDate, setReleaseDate] = useState('');
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const linkToBack = location.state?.from ?? '/Home';
  const YearNormalize = releaseDate.slice(0, 4);
  const percent = Math.round(movie.vote_average * 10);
  const overview = movie.overview;
  const { movieId } = useParams();
  const img =
    movie.poster_path !== null && movie.poster_path !== undefined
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : '';

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovie(data);
      setReleaseDate(data.release_date);
      setGenres(data.genres);
      // console.log(data.genres);
    });
  }, [movieId]);

  const scrolling = () => {
    scroll.scrollTo(600);
  };

  return (
    <Container>
      <Link to={linkToBack}>
        <GoBack>Go back</GoBack>
      </Link>
      <ContainerImgAndAbout>
        <ContainerImg>
          <Img src={`${img}`} alt={movie.title} />
        </ContainerImg>
        <About>
          <TitleDetails>
            {movie.title} ({YearNormalize})
          </TitleDetails>
          <p>User Score: {percent}%</p>
          <Text>Overview</Text>
          <p>{overview}</p>
          <Genres>Genres</Genres>
          <GenresList>
            {genres.length > 0 &&
              genres.map(genre => (
                <Genre key={genre.id}>
                  <p>{genre.name}</p>
                </Genre>
              ))}
          </GenresList>
        </About>
      </ContainerImgAndAbout>
      <AdditionalInformationContainer onClick={scrolling}>
        <p>Additional information</p>
        <AdditionalList>
          <ItemCastReviews>
            <StyledLink to="cast">Cast</StyledLink>
          </ItemCastReviews>
          <ItemCastReviews>
            <StyledLink to="reviews">Reviews</StyledLink>
          </ItemCastReviews>
        </AdditionalList>
      </AdditionalInformationContainer>
      <ContainerOutlet>
        <Suspense
          fallback={
            <Loader>
              <RotatingLines
                strokeColor="#3f51b5"
                strokeWidth="5"
                animationDuration="0.75"
                width="150"
                visible={true}
              />
            </Loader>
          }
        >
          <Outlet />
        </Suspense>
      </ContainerOutlet>
    </Container>
  );
};

export default MovieDetails;
