const fetchMovie = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=2ea3a1cc18afc4f3a22942cd8d7fba10'
  );
  const data = await response.json();
  return data.results;
};

export default fetchMovie;
