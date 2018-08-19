import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';
import remove from 'lodash/remove';
import ScrollAppear from './scroll-appear';
import MediaListItem from './media-list-item';

const MediaList = ({ media, apiKey }) => {
  const fitleredMedia = (
    media
      .sort((a, b) => b.popularity - a.popularity)
      .filter(item => remove(media, duplicate => duplicate.id === item.id))
    );

  return (
    <div>
      <h4 className="media-list__section-header">
        {fitleredMedia.length === 1 ? `1 result found` : `${fitleredMedia.length} results found`}
      </h4>
      <ul>
        {
          fitleredMedia.length > 0 && fitleredMedia.map((mediaItem) => (
            <li key={mediaItem.id} className="plex-requests__media-list">
              <ScrollAppear
                direction={faker.random.arrayElement(["left","right"])}
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
