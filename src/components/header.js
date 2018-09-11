import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => (
    <header>
      <div className="plex-requests__header-wrap">
        <div className="plex-requests__header-left">
          <img
              className="plex-requests__header-img"
              src="./images/play-symbol.png"
              alt="Plex Requests for tomd.io" />
            <a className="plex-requests__header-title" href="http://requests.tomd.io">{title}</a>
        </div>
      </div>
    </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
