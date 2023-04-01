import { NavLink, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import { Cast } from './Cast/Cast';
import { Movies } from './Movies/Movies';
import { MovieDetalis } from './MovieDetails/MovieDetails';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        {/* <NavLink to="/movies/:movieId">MovieDetails</NavLink> */}
        {/* <NavLink to="/movies/:movieId/cast">Cast</NavLink>
        <NavLink to="/movies/:movieId/reviews">Reviews</NavLink> */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetalis />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
