import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SearchPage extends React.Component {
  state = {
    options: [
      { label: 'apple', value: 'apple' },
      { label: 'banana', value: 'banana' },
      { label: 'pear', value: 'pear' }
    ],
    items: [],
    value: '',
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({
      value,
    }));
  };

  handleSelect = (e) => {

  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <Select
          options={this.state.options}
          inputValue={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
};

export default SearchPage;
