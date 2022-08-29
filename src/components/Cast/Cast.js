import {  useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MY_API_KEY = 'ceffe16ccd7d46ce9932d25cc21ec8d8';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();
  
  // console.log(movieCast.length);

  // console.log('movieCast', movieCast);
  // const getUrl = casts => {
  //   casts.map((c) => {
  //     if(c.profile_path !== null && c.profile_path !== undefined ){
  //       return `https://image.tmdb.org/t/p/w500${c.profile_path}`
  //     }
  //     return []
  //   })
  // } 
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3///movie/${movieId}/credits?api_key=${MY_API_KEY}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        setMovieCast(data.cast);
        // setUrl(getUrl(data.cast));
       
        // console.log(data.cast);
      });
  }, [movieId]);

  

  return (
    <ul>
      {movieCast.length > 0 && (movieCast.map(c => {
        // console.log('профайл', c.profile_path);
        // const imgCast = c.profile_path !== null? `https://image.tmdb.org/t/p/w500${c.profile_path}`: '';
        // console.log('imgCast',imgCast);
        return (
          <li key={c.id}>
            {c.profile_path !== null && c.profile_path !== undefined && ( <img src={`https://image.tmdb.org/t/p/w500${c.profile_path}`} alt={c.name} />)}
           
            <p>{c.name}</p>
            <p>Character: {c.character}</p>
          </li>
        );
      }))}
      {/* {movieCast.map(c => {
        // console.log('профайл', c.profile_path);
        const imgCast = c.profile_path !== null? `https://image.tmdb.org/t/p/w500${c.profile_path}`: '';
        // console.log('imgCast',imgCast);
        return (
          <li key={c.id}>
            <img src={`${imgCast}`} alt={c.name} />
            <p>{c.name}</p>
            <p>Character: {c.character}</p>
          </li>
        );
      })} */}
    </ul>
  );
};
