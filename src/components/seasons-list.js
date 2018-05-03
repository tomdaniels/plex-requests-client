import React from 'react';
import SeasonListItem from './season-list-item';

const Seasons = ({ title, seasons }) => (
  <div>
    <h4 className="season-list__section-header">
      {title}
    </h4>
    <ul>
      {
        seasons.length > 0 ? (seasons.map((season) => (
          <li key={season.id}>
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
