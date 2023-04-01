import { useEffect, useState } from 'react';

import fetchMovie from 'components/Services/Services';
import { Link } from 'react-router-dom';
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMovie().then(data => setData(() => [...data]));
    console.log(Date.now());
  }, []);
  console.log(data);

  return data.map(obj => {
    return (
      <li key={obj.id}>
        <Link to={`/movies/${obj.id}`}>{obj.original_title}</Link>
      </li>
    );
  });
};

export default Home;
