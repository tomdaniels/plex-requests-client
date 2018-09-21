import React from 'react';
import PropTypes from 'prop-types';
import ScrollAppear from './scroll-appear';
import MediaListItem from './media-list-item';

const MediaList = ({ media, apiKey }) => {
  const fitleredMedia = media
    .filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          element => element.title === item.title && element.id === item.id,
        ),
    )
    .sort((first, second) => second.popularity - first.popularity);

  return (
    <div>
      <h4 className="media-list__section-header">
        {fitleredMedia.length === 0
          ? '...fetching'
          : `${fitleredMedia.length} results found`}
      </h4>
      <ul>
        {fitleredMedia.length > 0 &&
          fitleredMedia.map(mediaItem => (
            <li key={mediaItem.id} className="plex-requests__media-list">
              <ScrollAppear>
                <MediaListItem apiKey={apiKey} {...mediaItem} />
              </ScrollAppear>
            </li>
          ))}
      </ul>
    </div>
  );
};

MediaList.propTypes = {
  apiKey: PropTypes.string.isRequired,
  media: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ),
};

MediaList.defaultProps = {
  media: [],
};

export default MediaList;
