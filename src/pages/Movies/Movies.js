import { useEffect, useState } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { getSearchMovie } from '../../components/Api';
import Notiflix from 'notiflix';
import styled from 'styled-components';
const SearchFormInput = styled.input`
display: inline-block;
width: 100%;
height: 42px;
font: inherit;
font-size: 20px;
border: none;
outline: none;
padding-left: 4px;
padding-right: 4px;
border-radius: 4px;
padding-top: 0;
padding-bottom: 0;
box-shadow: inset 1px 1px 3px -1px rgba(0, 0, 0, 0.6);
`;
const Button = styled.button`
position: absolute;
top: 0;
right: 0px;
width: 42px;
height: 42px;
border: none;
background-color: #87cefa;
border-radius: 0 5px 5px 0;
cursor: pointer;
:before {
  content: '\f002';
  font-family: FontAwesome;
  font-size: 16px;
  color: white
}
`;
const Form = styled.form`
position: relative;
width: 100vw;
display: flex;
align-items: center;
max-width: 400px;
background-color: #fff;
border-radius: 3px;
overflow: hidden;
margin-left: auto;
margin-right: auto;
margin-bottom: 30px;
`;

const MovieContainer = styled.div`
width: 100vw;
height: 100vh;
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
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),  box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
:hover {
  box-shadow: 14px 25px 40px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  transform: scale(1.1);
}
`;
const ContainerImg = styled.div`
height: 450px;
`;
const ContainerTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 75px;
`;
const Title = styled.p`
text-align: center;
line-height: 1.3;
font-size: 20px;
`;
const Img = styled.img`
width: 100%;
height: 100%;
display: block;
margin-bottom: 5px;
object-fit: cover;
`;


const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
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
      });
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();
    setQuery(e.target.elements.text.value.trim());
    setSearchParams(
      e.target.elements.text.value.trim() !== ''
        ? { query: e.target.elements.text.value.trim() }
        : {}
    );
    if (e.target.elements.text.value.trim() === '') {
      Notiflix.Notify.failure('Enter a query');
    }
    e.target.reset();
  };

 
  return (
    <MovieContainer>
      <Form onSubmit={onSubmit}>
        <SearchFormInput type="text" name="text"></SearchFormInput>
        <Button type="submit"></Button>
      </Form>
      <Ul>
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
      </Ul>
    </MovieContainer>
  );
};
export default Movies;
