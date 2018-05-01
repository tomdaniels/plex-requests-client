import React from 'react';
import PropTypes from 'prop-types';
import Movie from './movie-list-item';

const MovieList = ({ movies }) => (
  <ul>
    <h4>{movies.length === 1 ? `1 result found` : `${movies.length} results found`}</h4>
    {
      movies.length > 0 && movies.map((movie) => (
        <Movie {...movie} />
      ))
    }
  </ul>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
