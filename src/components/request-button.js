import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ mediaName, source, isLoading, onClick, requested }) => {

  const showName = mediaName.toLowerCase()
  const title = source === 'tv' ? 'Request Entire Series' : 'Request Movie';
  const alreadyRequested = localStorage.getItem(`${showName}`);

  return (
    <div>
      <button
        className="media-list__button"
        onClick={onClick}
      >
        {
          isLoading ? (
            <img className="media-list__loader" src="/images/loader.gif" />
          ) : (
            alreadyRequested ? 'Successfully Requested' : title
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
