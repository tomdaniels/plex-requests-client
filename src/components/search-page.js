import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MediaList from './media-list';

class SearchPage extends React.Component {
  state = {
    media: [],
    showList: false,
  };

  getTvShows(input) {
    const encodedInput = input.includes(' ') ? input.replace(' ', '+') : input;
    const endpoint = `https://api.themoviedb.org/3/search/tv?api_key=${this.props.apiKey}&query=${encodedInput}`;

    axios.get(endpoint).then((res) => {
      if (res.status === 200) {
      const results = res.data.results;
      const media = results.map((result) => ({
        source: 'tv',
        id: result.id,
        title: result.name,
        desc: result.overview,
        date: result.first_air_date,
        imageSlug: `${result.poster_path}`,
      }));
      this.setState(() => ({
        media,
      }));
    }
    }).catch((err) => console.log(err));
  };

  handleChange = (e) => {
    e.preventDefault();
    const input = e.target.value;

    this.getTvShows(input);
  };


  toggleList(event) {
    event.preventDefault();
    this.setState(() => ({
      showList: !this.state.showList,
    }));
  };

  render() {
    return (
      <div className="search-page__wrapper">
        <h1 className="search-page__section-header">Search</h1>
        <h3 className="search-page__sub-header">
          {'Want to watch something that\'s not on Plex? Add it yourself below!'}
        </h3>
        <form
          className="search-page__form-wrapper"
          onSubmit={this.toggleList.bind(this)}
        >
          <input
            className="search-page__text-input"
            type="text"
            onChange={this.handleChange}
          />
        {
          this.state.showList &&
          <button
            className="search-page__button"
            onClick={this.toggleList.bind(this)}
          >
            Hide List
          </button>
        }
        </form>
        {
          this.state.showList &&
          <MediaList media={this.state.media} apiKey={this.props.apiKey} />
        }
      </div>
    )
  }
};

SearchPage.propTypes = {
  apiKey: PropTypes.string.isRequired,
};

export default SearchPage;
