import React from 'react';

const SeasonListItem = ({ id, date, name, epCount, seriesId }) => {

  const onClick = () => {
    alert(`TODO: build api to send request for: series id ${seriesId}, season id ${id}`);
  }

  return (
    <div className="season-list-item__wrapper">
      <div className="season-list-item___headlines">
        <div>{name}</div>
        <div>{date}</div>
        <div>
          {epCount === 1 ? '1 episode' : `${epCount} episodes`}
        </div>
      </div>
      <button
        onClick={onClick}
        className="season-list-item__request-button"
      >
        Request Season
      </button>
    </div>
  )
};

export default SeasonListItem;
