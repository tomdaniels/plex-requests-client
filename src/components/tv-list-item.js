import React from 'react';
import PropTypes from 'prop-types';

const TvListItem = ({ id, title, desc, date, image }) => {

  const onClick = () => {
    console.log(id)
  };

  return (
    <div>
      <div className="series-list__title">
        <h5>{title}</h5>
        <h5>{date}</h5>
      </div>
      <div className="series-list__description">
        <img
        className="series-list__poster"
          src={image}
          alt={`Series Poster, ${title}`}
        />
        <p>{desc || 'Sorry, there is no description available for this series.'}</p>
      </div>
      <div className="series-list__button-wrap">
        <button
          className="series-list__button"
          onClick={onClick}
        >
          Request
        </button>
        <button className="series-list__expand-button">+</button>
      </div>
    </div>
  )
};

TvListItem.propTypes = {
  show: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    date: PropTypes.number,
    image: PropTypes.string,
  }),
};

export default TvListItem;
