import {
  Link,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getMovieDetails } from '../services/Api';
import { RotatingLines } from 'react-loader-spinner';
import { GoBack, Container, About, ContainerImgAndAbout, TitleDetails, Text, Genres, GenresList, Genre, AdditionalList, AdditionalInformationContainer, ItemCastReviews, StyledLink, Loader, ContainerFlex, ContainerImg, Img } from '../components/styled'

const Scrolling = require('react-scroll');
const scroll = Scrolling.animateScroll;


const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [releaseDate, setReleaseDate] = useState('');
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const linkToBack = location.state?.from ?? '/';
  const YearNormalize = releaseDate.slice(0, 4);
  const percent = Math.round(movie.vote_average * 10);
  const overview = movie.overview;
  const { movieId } = useParams();
  const img = movie.poster_path !== null && movie.poster_path !== undefined
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '';

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovie(data);
      setReleaseDate(data.release_date);
      setGenres(data.genres);
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
      <AdditionalInformationContainer >
        <p>Additional information</p>
        <AdditionalList>
          <ItemCastReviews>
            <StyledLink to="cast" state={{ from: linkToBack }} onClick={scrolling}>Cast</StyledLink>
          </ItemCastReviews>
          <ItemCastReviews>
            <StyledLink to="reviews" state={{ from: linkToBack }} onClick={scrolling} >Reviews</StyledLink>
          </ItemCastReviews>
        </AdditionalList>
      </AdditionalInformationContainer>
      <ContainerFlex>
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
      </ContainerFlex>
    </Container>
  );
};

export default MovieDetails;
