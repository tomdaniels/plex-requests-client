import React from 'react';

const Button = ({ source, isLoading, onClick, requested }) => {

  const title = source === 'tv' ? 'Request Entire Series' : 'Request Movie';

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
            requested ? 'Successfully Requested' : title
          )
        }
      </button>
    </div>
  )
}

Button.propTypes = {
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
