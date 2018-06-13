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

export default Button;
