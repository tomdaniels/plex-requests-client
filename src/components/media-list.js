import React from 'react';
import PropTypes from 'prop-types';
import remove from 'lodash/remove';
import ScrollAppear from './scroll-appear';
import MediaListItem from './media-list-item';

const MediaList = ({ media, apiKey }) => {
  media
    .sort((a, b) => b.popularity - a.popularity)
    .filter((item, index, self) => index == self.indexOf(item));

  return (
    <div>
      <h4 className="media-list__section-header">
        {media.length === 1 ? `1 result found` : `${media.length} results found`}
      </h4>
      <ul>
        {
          media.length > 0 && media.map((mediaItem) => (
            <li key={mediaItem.id} className="plex-requests__media-list">
              <ScrollAppear
                direction="left"
                children={ <MediaListItem apiKey={apiKey} {...mediaItem} /> }
              >
              </ScrollAppear>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

MediaList.propTypes = {
  apiKey: PropTypes.string.isRequired,
  media: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])))
};

MediaList.defaultProps = {
  media: [],
};

export default MediaList;
