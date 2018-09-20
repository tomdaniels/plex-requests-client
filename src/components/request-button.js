/* eslint-disable  */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  mediaId,
  mediaName,
  source,
  isLoading,
  onClick,
  requested,
}) => {
  const title = source === 'tv' ? 'Request entire series' : 'Request movie';
  const inStorage = localStorage.getItem(`${mediaId}`);
  // eslint-disable-next-line eqeqeq
  const rightContext = inStorage == mediaName; // coercion required
  const alreadyRequested = inStorage && rightContext;

  const buttonText = () => {
    if (isLoading) {
      return <img className="media-list__loader" src="/images/loader.gif" alt="loading spinner" />;
    } else if (alreadyRequested || requested) {
      return 'Successfully requested'
    }
    return title;
  }

  return (
    <div>
      <button
        className="media-list__button"
        disabled={alreadyRequested || requested || isLoading}
        onClick={onClick}
      >
        {buttonText()}
      </button>
    </div>
  );
};

Button.propTypes = {
  mediaName: PropTypes.string.isRequired,
  mediaId: PropTypes.number.isRequired,
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
