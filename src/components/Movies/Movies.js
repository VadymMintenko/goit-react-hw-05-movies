import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);

  const fetchMovie = async () => {
    const response = await fetch(
      ` https://api.themoviedb.org/3/search/movie?api_key=2ea3a1cc18afc4f3a22942cd8d7fba10&language=en-US&page=1&include_adult=false&query=${searchQuery}`
    );
    const data = await response.json();
    setData(() => [...data.results]);
  };

  const handleChange = evt => {
    setSearchQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    fetchMovie();
  };

  console.log(data);
  console.log(searchQuery);

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
            defaultValue={searchQuery}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <ul>
        {data.map(obj => {
          return (
            <li key={obj.id}>
              <Link to={`/movies/${obj.id}`}>{obj.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
