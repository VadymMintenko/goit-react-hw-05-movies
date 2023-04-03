import { Routes, Route } from 'react-router-dom';
// import Home from 'pages/Home/Home';
// import Cast from './Cast/Cast';
// import Movies from '../pages/Movies/Movies';
// import MovieDetalis from '../pages/MovieDetails/MovieDetails';
// import Reviews from './Reviews/Reviews';
// import Layout from '../Layout';
import { lazy } from 'react';

const Layout = lazy(() => import('../Layout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetalis = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetalis />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
