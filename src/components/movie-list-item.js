import React from 'react';
import PropTypes from 'prop-types';

const MovieListItem = ({ id, title, desc, date, image }) => (
  <div>
    <div>
      <h5>{title}</h5>
      <h5>{date}</h5>
    </div>
    <div>
      <p>{desc}</p>
    </div>
    <div>
      <button>Request</button>
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
