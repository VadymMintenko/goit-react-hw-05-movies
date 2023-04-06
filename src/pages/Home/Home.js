import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
const Home = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/all/day?api_key=2ea3a1cc18afc4f3a22942cd8d7fba10'
        );
        const data = await response.json();
        setData(() => [...data.results]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);

  return data.map(obj => {
    return (
      <li key={obj.id}>
        <Link to={`/movies/${obj.id}`} state={{ from: location }}>
          {obj.original_title}
        </Link>
      </li>
    );
  });
};
Home.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};

export default Home;
