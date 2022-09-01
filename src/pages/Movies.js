import { useEffect, useState } from 'react';
import { useSearchParams, useLocation, Link, } from 'react-router-dom';
import { getSearchMovie } from '../services/Api';
import Notiflix from 'notiflix';
import { SearchFormInput, Button, Form, MovieContainer, Ul, Li, Title, ContainerImg, ContainerTitle, Img, Loader, ContainerFlex } from '../components/styled';
import { RotatingLines } from 'react-loader-spinner';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setinputValue] = useState(searchParams.get('query') ?? '');
  const [films, setFilms] = useState([]);
  const location = useLocation();


  useEffect(() => {
    if (query === '') {
      return;
    }
    setIsLoading(true);
    getSearchMovie(query)
      .then(data => {
        setFilms(data.results);

        if (data.results.length === 0) {
          Notiflix.Notify.failure(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
      })
      .catch(error => {
        console.error(error);
      }).finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      Notiflix.Notify.failure('Enter a query');
      setinputValue('')
      return
    }
    setQuery(inputValue.trim());
    setSearchParams(
      inputValue.trim() !== ''
        ? { query: inputValue.trim() }
        : {}
    );
  };
  const handleChangeInput = event => {
    setinputValue(event.target.value)
  }


  return (
    <ContainerFlex>
      <Form onSubmit={onSubmit}>
        <SearchFormInput type="text" name="text" value={inputValue} onChange={handleChangeInput}></SearchFormInput>
        <Button type="submit"></Button>
      </Form>
      {!isLoading && (<Ul>
        {films.length > 0 &&
          films.map(film => (
            <Li key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                <ContainerImg>
                  <Img
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    alt={film.title}
                  />
                </ContainerImg>
                <ContainerTitle>
                  <Title>{film.title}</Title>
                </ContainerTitle>
              </Link>
            </Li>
          ))}
      </Ul>)}
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
  );
};
export default Movies;
