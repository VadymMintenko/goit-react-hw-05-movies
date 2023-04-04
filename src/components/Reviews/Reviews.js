import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Reviews = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=2ea3a1cc18afc4f3a22942cd8d7fba10&language=en-US&page=1`
        );
        const data = await response.json();
        setData(() => [...data.results]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (data.length === 0) {
    return <p>No reviews</p>;
  }

  return data.map(obj => {
    return (
      <li key={obj.id}>
        <h3>{obj.author}</h3>
        <p>{obj.content}</p>
      </li>
    );
  });
};
Reviews.propTypes = {
  movieId: PropTypes.string,
};
export default Reviews;

// sasda
