import React from 'react';
import PropTypes from 'prop-types';
import SeasonListItem from './season-list-item';

const Seasons = ({ title, seasons }) => {

  const seasonsList = seasons.reverse();
  return (
    <div>
      <h4 className="season-list__section-header">
        {title}
      </h4>
      <h6 className="season-list__section-subheader">{seasons.length === 1 ? '1 Season found' : `${seasons.length} seasons found`}</h6>
      <ul className="season-list__wrap">
        {
          seasonsList.length > 0 ? (seasons.map((season) => (
            <li key={season.id} className="plex-requests__seasons-list">
              <SeasonListItem {...season} />
            </li>
          ))) : (
            'No results found..'
          )
        }
      </ul>
    </div>
  )
};

Seasons.propTypes = {
  title: PropTypes.string.isRequired,
  seasons: PropTypes.array.isRequired,
};

export default Seasons;
