import React from 'react';
import axios from 'axios';

const SeasonListItem = ({ id, date, name, epCount, seriesId }) => {

  const onClick = () => {
    const endpoint = `http://requests-api.tomd.io/v1/tv/${id}/season/${seriesId}`;
    axios.post(endpoint).then((response) => {
      if (response.status === 200) {
        alert(`${title} successfully requested`);
      }
    }).catch((error) => {
      console.log(error);
      alert(`oops! Call the tech guys.. something went wrong: ${error}`);
    });
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
