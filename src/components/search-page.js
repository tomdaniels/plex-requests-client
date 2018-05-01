import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SearchPage extends React.Component {
  state = {
    options: [
      { label: 'apple pie', value: 'apple pie' },
      { label: 'banana', value: 'banana' },
      { label: 'pear', value: 'pear' }
    ],
    items: [],
    value: '',
    movies: [],
  };

  handleChange = (e) => {
    const value = e.value;
    this.setState(() => ({
      value,
    }));
  };

  getMoviesByInput(input, key) {
    const encodedInput = input.replace(' ', '+');
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${encodedInput}`;
    axios.get(endpoint).then((res) => {
      const results = res.data.results;
      const movie = results.map((result) => ({
        id: result.id,
        title: result.title,
        date: result.release_date,
        descriptions: result.overview,
        image: result.poster_path,
      }));
      console.log(movie.map((mov) => mov));
    }).catch((error) => console.log(error));
  }

  render() {
    this.getMoviesByInput(this.state.value, this.props.apiKey);
    return (
      <div>
        <h1>Search</h1>
        <Select
          options={this.state.options}
          inputValue={this.state.value}
          onChange={this.handleChange}
          value={this.state.value}
          allowCreate
          clearable
        />
      </div>
    )
  }
};

SearchPage.propTypes = {
  apiKey: PropTypes.string.isRequired,
};

export default SearchPage;
