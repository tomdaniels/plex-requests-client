import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MediaList from './media-list';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      media: [],
      searchInput: '',
      showList: false,
    };
    this.clearList = this.clearList.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    const input = this.state.searchInput;
    this.setState(() => ({
      showList: true,
    }));
    this.getMedia(input);
  }

  getMedia(input) {
    const encodedInput = input.includes(' ') ? input.replace(' ', '+') : input;
    const movieEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${
      this.props.apiKey
    }&query=${encodedInput}&sort_by=popularity`;
    const tvEndpoint = `https://api.themoviedb.org/3/search/tv?api_key=${
      this.props.apiKey
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
          this.setState(() => ({
            media,
          }));
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
              this.setState(prevState => ({
                media: prevState.media.concat(movies),
              }));
            }
          })
          // eslint-disable-next-line no-console
          .catch(err => console.log(err));
      });
  }

  handleChange = event => {
    event.preventDefault();
    const input = event.target.value;

    this.setState(() => ({
      showList: false,
      searchInput: input,
    }));
  };

  clearList = () => {
    this.setState(() => ({
      media: [],
      searchInput: '',
      showList: false,
    }));

    this.searchInput.focus();
  };

  render() {
    return (
      <div className="search-page__wrapper">
        <h1 className="search-page__section-header">Search</h1>
        <h3 className="search-page__sub-header">
          {"Wanna see something that's not on my Plex? Sort that out below..."}
        </h3>
        <form
          className="search-page__form-wrapper"
          onSubmit={this.onFormSubmit}
        >
          <input
            className="search-page__text-input"
            ref={input => {
              this.searchInput = input;
            }}
            type="text"
            value={this.state.searchInput}
            placeholder="by movie or show title.."
            onChange={this.handleChange}
          />
          {this.state.showList && (
            <button className="search-page__button" onClick={this.clearList}>
              Clear List
            </button>
          )}
        </form>
        {this.state.showList && (
          <MediaList media={this.state.media} apiKey={this.props.apiKey} />
        )}
      </div>
    );
  }
}

SearchPage.propTypes = {
  apiKey: PropTypes.string.isRequired,
};

export default SearchPage;
