import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({title}) => (
    <header>
      <div className="plex-requests__header-wrap">
        <div className="plex-requests__header-left">
          <img
              className="plex-requests__header-img"
              src="/images/play-symbol.png"
              alt="Plex Requests for tomd.io" />
          <p className="plex-requests__header-item">{title}</p>
        </div>
        <div className="plex-requests__header-right">
          <p className="plex-requests__header-item">Search</p>
          <p className="plex-requests__header-item">My Requests</p>
        </div>
      </div>
    </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
