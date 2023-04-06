import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Form from 'components/Form/Form';

const Movies = () => {
  const [data, setData] = useState([]);

  const [serchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const searchValue = serchParams.get('query') ?? '';

  useEffect(() => {
    if (searchValue === '') {
      return;
    }

    const fetchMovie = async () => {
      try {
        const response = await fetch(
          ` https://api.themoviedb.org/3/search/movie?api_key=2ea3a1cc18afc4f3a22942cd8d7fba10&language=en-US&page=1&include_adult=false&query=${searchValue}`
        );
        const data = await response.json();
        setData(() => [...data.results]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie(searchValue);
  }, [searchValue]);

  const handleSubmit = query => {
    const newParams = query !== '' ? { query } : {};
    setSearchParams(newParams);
  };

  return (
    <>
      <Form value={searchValue} onSubmit={handleSubmit} />

      <ul>
        {data.map(obj => {
          return (
            <li key={obj.id}>
              <Link to={`/movies/${obj.id}`} state={{ from: location }}>
                {obj.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

Movies.propTypes = {
  response: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })
    ),
  }),
};

export default Movies;
