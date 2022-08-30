import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../components/Api';
import styled from 'styled-components';

const TitleReview = styled.h3`
font-weight: 600;
margin-bottom:10px;
margin-top: 29px;

`

const Reviews = () => {
  const [movieReviews, setmovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => {
        setmovieReviews(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieReviews.length > 0 ? (
          movieReviews.map(review => {
            return (
              <li key={review.id}>
                <TitleReview >Author: {review.author}</TitleReview >
                <p>{review.content}</p>
              </li>
            );
          })
        ) : (
          <p>We don`t have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};
export default Reviews;
