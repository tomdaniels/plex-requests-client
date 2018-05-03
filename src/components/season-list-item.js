import React from 'react';

const SeasonListItem = ({ id, date, name, epCount }) => {

  const onClick = () => {
    console.log(id)
  }

  return (
    <div className="plex-requests__season-list-item">
      <div>{name} ({epCount === 1 ? '1 episode' : `${epCount} episodes`}) - {date}</div>
      <button onClick={onClick}>Request Season</button>
    </div>
  )
};

export default SeasonListItem;
