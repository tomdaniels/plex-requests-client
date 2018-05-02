import React from 'react';
import PropTypes from 'prop-types';
import Show from './tv-list-item';

const TvList = ({ series }) => (
  <div>
    <h4 className="series-list__section-header">
      {series.length === 1 ? `1 result found` : `${series.length} results found`}
    </h4>
    <ul>
      {
        series.length > 0 && series.map((show) => (
          <li key={show.id} className="plex-requests__series-list">
            <Show {...show} />
          </li>
        ))
      }
    </ul>
  </div>
);

TvList.propTypes = {
  series: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))),
};

TvList.defaultProps = {
  series: [],
};

export default TvList;
