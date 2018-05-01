import React from 'react';
import PropTypes from 'prop-types';
import Movie from './movie-list-item';

const MovieList = ({ movies }) => (
  <div>
    <h4 className="movie-list__section-header">
      {movies.length === 1 ? `1 result found` : `${movies.length} results found`}
    </h4>
    <ul>
      {
        movies.length > 0 && movies.map((movie) => (
          <li key={movie.id} className="plex-requests__movie-list">
            <Movie {...movie} />
          </li>
        ))
      }
    </ul>
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
