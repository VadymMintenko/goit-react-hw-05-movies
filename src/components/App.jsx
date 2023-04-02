import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import { Cast } from './Cast/Cast';
import { Movies } from './Movies/Movies';
import { MovieDetalis } from './MovieDetails/MovieDetails';
import { Reviews } from './Reviews/Reviews';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetalis />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
