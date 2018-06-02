import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Modal from 'react-modal';
import Seasons from './seasons-list';
import Button from './request-button';

class MediaListItem extends React.Component {
  state = {
    isLoading: false,
    expandTvShow: false,
    seasons: [],
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      expandTvShow: !prevState.expandTvShow,
    }));
  };

  onMediaRequest = (source) => {
    this.setState(() => ({
      isLoading: true,
    }));

    const endpoint = this.props.source === 'movie' ? (
      `http://requests-api.tomd.io/v1/movie/${this.props.id}`
    ) : (
      `http://requests-api.tomd.io/v1/tv/${this.props.id}`
    );

    axios.post(endpoint).then((response) => {
      if (response.status === 200) {
        this.setState(() => ({
          isLoading: false,
        }));
        alert(`${this.props.title} has successfully been requested`);
      }
    }).catch((error) => {
      this.setState(() => ({
        isLoading: false,
      }));
      alert(`Oops... Call the tech guys! Something went wrong requesting ${this.props.title}`);
    });
  }

  getSeasonData = () => {
    const endpoint = `https://api.themoviedb.org/3/tv/${this.props.id}?api_key=${this.props.apiKey}`;

    axios.get(endpoint).then((response) => {
      if (response.status === 200) {
        const results = response.data.seasons;
        const seasons = results.map((result) => ({
          id: result.id,
          date: result.air_date,
          epCount: result.episode_count,
          name: result.name,
          seriesId: this.props.id,
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
        <div className="media-list__title">
          <h5 className="media-list__media-name">{this.props.title}</h5>
          <h5 className="media-list__media-date">{this.props.date}</h5>
        </div>
        <div className="media-list__description">
          {
            this.props.imageSlug !== 'null' &&
              <img className="media-list__poster"
              src={`http://image.tmdb.org/t/p/w185${this.props.imageSlug}`}
              alt={`${this.props.source === 'tv' ? 'Series' : 'Movie'} Poster, ${this.props.title}`}
              />
          }
          <p>
            {
              this.props.desc || `Sorry, there is no description available for this ${this.props.source === 'tv' ? 'series' : 'movie'}.`
            }
          </p>
        </div>
        <div className="media-list__button-wrap">
          <Button
            isLoading={this.state.isLoading}
            source={this.props.source}
            onClick={this.onMediaRequest}
          />
        {
          this.props.source === 'tv' &&
            <button
                  className="media-list__button"
                  onClick={this.toggleModal}
                >
                  +
            </button>
        }
        </div>
        {
          this.state.expandTvShow &&
            <Modal
              isOpen={this.state.expandTvShow}
              onAfterOpen={this.getSeasonData}
              onRequestClose={this.toggleModal}
              ariaHideApp={false}
              className="modal"
            >
              <Seasons title={this.props.title} seasons={this.state.seasons} />
            </Modal>
        }
      </div>
    )
  }
};



MediaListItem.propTypes = {
  apiKey: PropTypes.string.isRequired,
  media: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    date: PropTypes.number,
    image: PropTypes.string,
  }),
};

export default MediaListItem;
