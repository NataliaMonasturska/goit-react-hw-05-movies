import { Routes, Route } from "react-router-dom";
import { useState} from 'react';
// import { lazy } from "react";
import {SharedLayout} from 'components/SharedLayout/SharedLayout';
import {Home} from 'pages/Home/Home';
import {Movies} from 'pages/Movies/Movies';
import {MovieDetails} from 'pages/MovieDetails/MovieDetails';
import {Cast} from 'components/Cast/Cast';
import { Reviews} from 'components/Reviews/Reviews';

// const Home = lazy(() => import("pages/Home/Home"));

// const KEY_API = 'ceffe16ccd7d46ce9932d25cc21ec8d8'










export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies/>}/>  
          <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
          </Route>
      </Routes>
    </>

  );
};
