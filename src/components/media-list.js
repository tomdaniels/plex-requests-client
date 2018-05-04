import React from 'react';
import PropTypes from 'prop-types';
import MediaListItem from './media-list-item';

const MediaList = ({ media, apiKey }) => (
  <div>
    <h4 className="media-list__section-header">
      {media.length === 1 ? `1 result found` : `${media.length} results found`}
    </h4>
    <ul>
      {
        media.length > 0 && media.map((mediaItem) => (
          <li key={mediaItem.id} className="plex-requests__media-list">
            <MediaListItem apiKey={apiKey} {...mediaItem} />
          </li>
        ))
      }
    </ul>
  </div>
);

MediaList.propTypes = {
  media: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))),
};

MediaList.defaultProps = {
  media: [],
};

export default MediaList;
