import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Modal from 'react-modal';
import Seasons from './seasons-list';
import apiKey from './api-key';

class TvListItem extends React.Component {
  state ={
    expandTvShow: false,
    seasons: [],
  };

  toggleModal = () => {
    this.setState(() => ({
      expandTvShow: !this.state.expandTvShow,
    }));
  };

  onFullSeriesClick = () => {
    //TODO: make api to store tvID for sonarr PUT api call on local.
    console.log(this.props.id)
  };

  getSeasonData = () => {
    const endpoint = `https://api.themoviedb.org/3/tv/${this.props.id}?api_key=${apiKey}`;

    axios.get(endpoint).then((response) => {
      if (response.status === 200) {
        const results = response.data.seasons;
        const seasons = results.map((result) => ({
          id: result.id,
          date: result.air_date,
          epCount: result.episode_count,
          name: result.name,
        }));
        this.setState(() => ({
          seasons,
        }));
      }
    }).catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="series-list__title">
          <h5>{this.props.title}</h5>
          <h5>{this.props.date}</h5>
        </div>
        <div className="series-list__description">
          {
            this.props.imageSlug !== 'null' &&
              <img className="series-list__poster" src={`http://image.tmdb.org/t/p/w185${this.props.imageSlug}`} alt={`Series Poster, ${this.props.title}`} />
          }
          <p>{this.props.desc || 'Sorry, there is no description available for this series. '}</p>
        </div>
        <div className="series-list__button-wrap">
          <button
            className="series-list__button"
            onClick={this.onFullSeriesClick}
          >
            Request Entire Series
          </button>
          <button
            className="series-list__button"
            onClick={this.toggleModal}
          >
            +
          </button>
        </div>
        {
          this.state.expandTvShow &&
            <Modal
              isOpen={this.state.expandTvShow}
              onAfterOpen={this.getSeasonData}
              onRequestClose={this.toggleModal}
              ariaHideApp={false}
            >
              <Seasons title={this.props.title} seasons={this.state.seasons} />
            </Modal>
        }
      </div>
    )
  }
};



TvListItem.propTypes = {
  show: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    date: PropTypes.number,
    image: PropTypes.string,
  }),
};

export default TvListItem;
