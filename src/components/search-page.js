import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MediaList from './media-list';

const SearchPage = ({ apiKey }) => {
  const [ media, setMedia ] = useState([]);
  const [ activeSearch, setActiveSearch ] = useState('');
  const [ showResults, setShowResults ] = useState(false);
  const [ inputField, setInputField ] = useState(undefined);

  const getMedia = (input) => {
    const encodedInput = input.includes(' ') ? input.replace(' ', '+') : input;
    const movieEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${
      apiKey
    }&query=${encodedInput}&sort_by=popularity`;
    const tvEndpoint = `https://api.themoviedb.org/3/search/tv?api_key=${
      apiKey
    }&query=${encodedInput}&sort_by=popularity`;

    axios
      .get(tvEndpoint)
      .then(res => {
        if (res.status === 200) {
          const { results } = res.data;
          const media = results.map(result => ({
            source: 'tv',
            id: result.id,
            title: result.name,
            desc: result.overview,
            date: result.first_air_date,
            popularity: result.popularity,
            imageSlug: `${result.poster_path}`,
          }));
          setMedia(media);
        }
      })
      .then(() => {
        axios
          .get(movieEndpoint)
          .then(response => {
            if (response.status === 200) {
              const { results } = response.data;
              const movies = results.map(result => ({
                source: 'movie',
                id: result.id,
                title: result.title,
                desc: result.overview,
                date: result.release_date,
                popularity: result.popularity,
                imageSlug: `${result.poster_path}`,
              }));
              setMedia(movies)
            }
          })
          // eslint-disable-next-line no-console
          .catch(err => console.log(err));
      });
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    setShowResults(true);
    getMedia(activeSearch);
  }

  const handleChange = event => {
    event.preventDefault();
    const input = event.target.value;

    setActiveSearch(input);
    setShowResults(false);
  };

  const clearList = () => {
    setMedia([]);
    setActiveSearch('');
    setShowResults(false);

    inputField.focus();
  };

  return (
    <div className="search-page__wrapper">
        <h1 className="search-page__section-header">Search</h1>
        <h3 className="search-page__sub-header">
          {"Wanna see something that's not on my Plex? Sort that out below..."}
        </h3>
        <form
          className="search-page__form-wrapper"
          onSubmit={onFormSubmit}
        >
          <input
            className="search-page__text-input"
            ref={input => {
              setInputField(input);
            }}
            type="text"
            value={activeSearch}
            placeholder="by movie or show title.."
            onChange={handleChange}
          />
          {showResults && (
            <button className="search-page__button" onClick={clearList}>
              Clear List
            </button>
          )}
        </form>
        {showResults && (
          <MediaList media={media} apiKey={apiKey} />
        )}
      </div>
  )
}

SearchPage.propTypes = {
  apiKey: PropTypes.string.isRequired,
};

export default SearchPage;
