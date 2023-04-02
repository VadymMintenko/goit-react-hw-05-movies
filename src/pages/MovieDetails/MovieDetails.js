import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { MovieDetalisContainer } from './MovieDetalis.styled';

export const MovieDetalis = () => {
  const { movieId } = useParams();
  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=2ea3a1cc18afc4f3a22942cd8d7fba10&language=en-US`
      );
      const data = await response.json();

      setData(data);
    };
    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <h2>MovieDetalis</h2>
      <Link to={location.state?.from ?? '/movies'}>Back to</Link>
      <MovieDetalisContainer>
        <div>
          {' '}
          {data.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title}
            />
          )}
        </div>
        <div>
          <h2>{data.title}</h2>
          <p>User Score: {data.vote_average}</p>
          <h3>Overview</h3>
          <p>{data.overview}</p>
          <h3>Genres</h3>
          <ul>
            {data.genres &&
              data.genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
          </ul>
        </div>
      </MovieDetalisContainer>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
