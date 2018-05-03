import React from 'react';
import SeasonListItem from './season-list-item';

const Seasons = ({ title, seasons }) => (
  <div>
    <h4 className="season-list__section-header">
      {title}
    </h4>
    <h6 className="season-list__section-subheader">{seasons.length === 1 ? '1 Season found' : `${seasons.length} seasons found`}</h6>
    <ul>
      {
        seasons.length > 0 ? (seasons.map((season) => (
          <li key={season.id} className="plex-requests__seasons-list">
            <SeasonListItem {...season} />
          </li>
        ))) : (
          'No results found..'
        )
      }
    </ul>
  </div>
);

export default Seasons;
