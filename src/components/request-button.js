import React from 'react';

const Button = ({ source, isLoading, onClick }) => {

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
            title
          )
        }
      </button>
    </div>
  )
}

export default Button;
