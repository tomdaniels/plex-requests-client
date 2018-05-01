import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MovieList from './movie-list';

class SearchPage extends React.Component {
  state = {
    movies: [],
    showList: false,
  };

  getMoviesDynamically(input) {
    const encodedInput = input.includes(' ') ? input.replace(' ', '+') : input;
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${this.props.apiKey}&query=${encodedInput}`;

    axios.get(endpoint).then((res) => {
      if (res.status === 200) {
      const results = res.data.results;
      const movies = results.map((result) => ({
        id: result.id,
        title: result.title,
        desc: result.overview,
        date: result.release_date,
        image: result.poster_path,
      }));
      this.setState(() => ({
        movies,
      }));
    }
    }).catch((err) => console.log(err));
  };

  handleChange = (e) => {
    e.preventDefault();
    const input = e.target.value;

    this.getMoviesDynamically(input);
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
          Want to watch a movie that's not on Plex? Add it yourself below!
        </h3>
        <form onSubmit={this.toggleList.bind(this)}>
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
          <MovieList movies={this.state.movies} />
        }
      </div>
    )
  }
};

SearchPage.propTypes = {
  apiKey: PropTypes.string.isRequired,
};

export default SearchPage;
