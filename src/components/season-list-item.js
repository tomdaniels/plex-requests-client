import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class SeasonListItem extends React.Component {
  state = {
    isLoading: false,
    requested: false,
  };

  onClick = () => {
    const endpointShowName = this.props.title
      .toLowerCase()
      .split(' ')
      .join('-')
      .replace("'", '')
      .replace('.', '');
    const endpointSeasonNumber = this.props.seasonNumber
      .toLowerCase()
      .split(' ')
      .join('-');

    this.setState(() => ({
      isLoading: true,
    }));
    const endpoint = `http://requests-api.tomd.io/v1/tv/${endpointShowName}/season/${endpointSeasonNumber}`;

    axios
      .post(endpoint)
      .then(response => {
        if (response.status === 200) {
          this.setState(() => ({
            isLoading: false,
            requested: true,
          }));
          localStorage.setItem(
            `${this.props.seasonNumber}`,
            `${this.props.seriesId}`,
          );
        }
      })
      .catch(error => {
        this.setState(() => ({
          isLoading: false,
        }));
        // eslint-disable-next-line no-alert
        alert(`oops! Call the tech guys.. something went wrong: ${error}`);
      });
  };

  render() {
    const inStorage = localStorage.getItem(`${this.props.seasonNumber}`);
    // eslint-disable-next-line eqeqeq
    const rightContext = inStorage == this.props.seriesId; // coercion required
    const alreadyRequested = inStorage && rightContext;
    const buttonTitle =
      alreadyRequested || this.state.requested
        ? 'Successfully requested'
        : 'Request Season';

    return (
      <div className="season-list-item__wrapper">
        <div className="season-list-item___headlines">
          <div className="season-list-item__title">
            {this.props.seasonNumber}
          </div>
          <div className="season-list-date">{this.props.date}</div>
          <div className="season-list-ep-count">
            {this.props.epCount === 1
              ? '1 episode'
              : `${this.props.epCount} episodes`}
          </div>
        </div>
        <button
          onClick={this.onClick}
          disabled={alreadyRequested || this.state.requested}
          className="season-list-item__request-button"
        >
          {this.state.isLoading ? (
            <img
              className="media-list__loader"
              src="/images/loader.gif"
              alt="loading spinner"
            />
          ) : (
            buttonTitle
          )}
        </button>
      </div>
    );
  }
}

SeasonListItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  epCount: PropTypes.number.isRequired,
  seasonNumber: PropTypes.string.isRequired,
  seriesId: PropTypes.number.isRequired,
};

export default SeasonListItem;
