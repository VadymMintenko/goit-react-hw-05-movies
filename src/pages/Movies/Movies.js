import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [serchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const query = serchParams.get('query') ?? '';

  const location = useLocation();

  const fetchMovie = async query => {
    const response = await fetch(
      ` https://api.themoviedb.org/3/search/movie?api_key=2ea3a1cc18afc4f3a22942cd8d7fba10&language=en-US&page=1&include_adult=false&query=${query}`
    );
    const data = await response.json();
    setData(() => [...data.results]);
  };

  const handleChange = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    fetchMovie(query);
  };

  return (
    <>
      <div>
        Movies
        <form className="search-form" id="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchQuery"
            autoComplete="off"
            placeholder="Search movie..."
            value={query}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>

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

export default Movies;
