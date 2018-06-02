import React from 'react';
import axios from 'axios';

class SeasonListItem extends React.Component {
  state = {
    isLoading: false,
  };

  onClick = () => {
    this.setState(() => ({
      isLoading: true,
    }));
    const endpoint = `http://requests-api.tomd.io/v1/tv/${this.props.id}/season/${this.props.seriesId}`;
    axios.post(endpoint).then((response) => {
      if (response.status === 200) {
        this.setState(() => ({
          isLoading: false,
        }));
        alert(`${this.props.name} successfully requested`);
      }
    }).catch((error) => {
      this.setState(() => ({
        isLoading: false,
      }));
      alert(`oops! Call the tech guys.. something went wrong: ${error}`);
    });
  }

  render() {
    return (
      <div className="season-list-item__wrapper">
        <div className="season-list-item___headlines">
          <div className="season-list-item__title">{this.props.name}</div>
          <div className="season-list-date">{this.props.date}</div>
          <div className="season-list-ep-count">
            {this.props.epCount === 1 ? '1 episode' : `${this.props.epCount} episodes`}
          </div>
        </div>
        <button
          onClick={this.onClick}
          className="season-list-item__request-button"
        >
        {this.state.isLoading ? (
          <img className="media-list__loader" src="/images/loader.gif"/>
        ) : 'Request Season'}
        </button>
      </div>
    )
  }
}

export default SeasonListItem;
