import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = evt => {
    setQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <div>
      Movies
      <form className="search-form" id="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchValue"
          autoComplete="off"
          placeholder="Search movie..."
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
