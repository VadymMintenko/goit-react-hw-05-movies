import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Cast = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `
https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=2ea3a1cc18afc4f3a22942cd8d7fba10&language=en-US`
        );
        const data = await response.json();

        setData(() => [...data.cast]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <ul>
      {data.map(obj => {
        return (
          <li key={obj.id}>
            <p>{obj.name}</p>
            <p>{obj.character}</p>
            {obj.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${obj.profile_path}`}
                alt={obj.name}
                width="200px"
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
};
export default Cast;
