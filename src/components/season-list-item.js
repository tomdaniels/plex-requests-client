import React from 'react';

const SeasonListItem = ({ id, date, name, epCount, seriesId }) => {

  const onClick = () => {
    console.log(`series id: ${seriesId}. season id: ${id}`);
  }

  return (
    <div className="plex-requests__season-list-item">
      <div>{name} ({epCount === 1 ? '1 episode' : `${epCount} episodes`}) - {date}</div>
      <button onClick={onClick} className="plex-requests__season-request-button">Request Season</button>
    </div>
  )
};

export default SeasonListItem;
