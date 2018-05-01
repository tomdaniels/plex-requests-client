import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SearchPage extends React.Component {
  state = {
    searchTerm: '',
    movies: [],
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
    } else {
      return 'something went wrong, searching for that movie';
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
    console.log('render movies in list below');
  };

  render() {
    return (
      <div>
        <h1>Search</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            onInput={this.handleChange}
          />
        </form>
      </div>
    )
  }
};

SearchPage.propTypes = {
  apiKey: PropTypes.string.isRequired,
};

export default SearchPage;
