// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { getTrendingMovie } from '../../components/Api';
// import styled from 'styled-components';

// const Img = styled.img`
//   width: 100%;
//   height: 100%;
//   display: block;
//   margin-bottom: 5px;
//   object-fit: cover;
// `;
// const Ul = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
//   margin-left: auto;
//   margin-right: auto;
//   margin: -35px;
//   padding: 0;
// `;
// const Li = styled.li`
//   width: 300px;
//   height: 525px;
//   margin: 35px;
//   border: 1px solid black;
//   border-radius: 5px;
//   background-color: white;
//   font-weight: 600;
//   font-size: 16px;
//   line-height: 1.2;
//   box-shadow: 14px 14px 28px rgba(0, 0, 0, 0.25),
//     0 10px 10px rgba(0, 0, 0, 0.22);
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   :hover {
//     box-shadow: 14px 25px 40px rgba(0, 0, 0, 0.25),
//       0 10px 10px rgba(0, 0, 0, 0.22);
//     transform: scale(1.1);
//   }
// `;
// const Title = styled.p`
//   text-align: center;
//   line-height: 1.3;
//   font-size: 20px;
// `;
// const Container = styled.div`
//   /* margin: -15px; */
// `;
// const ContainerImg = styled.div`
//   height: 450px;
// `;
// const ContainerTitle = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 75px;
// `;

// const MoviesList = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);
//   const location = useLocation();

//   useEffect(() => {
//     getTrendingMovie()
//       .then(data => {
//         setTrendingMovies(data.results);
//         console.log(data.results);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <Container>
//       <Ul>
//         {trendingMovies.length > 0 &&
//           trendingMovies.map(Movie => (
//             <Li key={Movie.id}>
//               <Link to={`/movies/${Movie.id}`} state={{ from: location }}>
//                 <ContainerImg>
//                   <Img
//                     src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
//                     alt={Movie.title}
//                   />
//                 </ContainerImg>
//                 <ContainerTitle>
//                   <Title>{Movie.title}</Title>
//                 </ContainerTitle>
//               </Link>
//             </Li>
//           ))}
//       </Ul>
//     </Container>
//   );
// };
// export default MoviesList;