import React from 'react';
import PropTypes from 'prop-types';

const MovieListItem = ({ id, title, desc, date, image }) => (
  <div>
    <div className="movie-list__title">
      <h5>{title}</h5>
      <h5>{date}</h5>
    </div>
    <div>
      <p>{desc}</p>
    </div>
    <div className="movie-list__button-wrap">
      <button className="movie-list__button">Request</button>
    </div>
  </div>
);

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    date: PropTypes.number,
    image: PropTypes.string,
  }),
};

export default MovieListItem;
