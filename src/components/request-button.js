import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ mediaId, mediaName, source, isLoading, onClick, requested }) => {

  const title = source === 'tv' ? 'Request Entire Series' : 'Request Movie';
  const inStorage = window.localStorage.getItem(`${mediaId}`);
  const rightContext = inStorage == mediaName;
  const alreadyRequested = inStorage && rightContext;

  return (
    <div>
      <button
        className="media-list__button"
        disabled={alreadyRequested || requested}
        onClick={onClick}
      >
        {
          isLoading ? (
            <img className="media-list__loader" src="/images/loader.gif" />
          ) : (
            alreadyRequested || requested ? 'Successfully Requested' : title
          )
        }
      </button>
    </div>
  )
}

Button.propTypes = {
  mediaName: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  requested: PropTypes.bool,
};

Button.defaultProps = {
  isLoading: false,
  onClick: () => {},
  requested: false,
};

export default Button;
