import React from 'react';

const SeasonListItem = ({ date, name, epCount }) => (
  <div className="plex-requests__season-list">
    <p>{name} ({epCount === 1 ? '1 episode' : `${epCount} episodes`})</p>
    <p>{date}</p>
  </div>
);

export default SeasonListItem;
