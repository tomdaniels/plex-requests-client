import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MovieList from './movie-list';

class SearchPage extends React.Component {
  state = {
    searchTerm: '',
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

    this.setState(() => ({
      searchTerm: input,
    }));

    this.getMoviesDynamically(input);
  };

  onSubmit(event) {
    event.preventDefault();
    this.setState(() => ({
      showList: true,
    }));
  };

  closeList() {
    this.setState(() => ({
      showList: false,
      searchTerm: '',
    }));
  };

  render() {
    return (
      <div>
        <h1>Search</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            onChange={this.handleChange}
          />
        {
          this.state.showList &&
          <button type="reset" onClick={this.closeList.bind(this)}>Hide List</button>
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
