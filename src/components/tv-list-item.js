import React from 'react';
import PropTypes from 'prop-types';

class TvListItem extends React.Component {
  state ={
    exandTvShow: false,
  };

  showExpandClick = () => {
    this.setState(() => ({
      expandTvShow: true,
    }));
  };

  onFullSeriesClick = () => {
    console.log(this.props.id)
  };

  render() {
    return (
      <div>
        <div className="series-list__title">
          <h5>{this.props.title}</h5>
          <h5>{this.props.date}</h5>
        </div>
        <div className="series-list__description">
          <img className="series-list__poster" src={this.props.image} alt={`Series Poster, ${this.props.title}`} />
          <p>{this.props.desc || 'Sorry, there is no description available for this series.'}</p>
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
            onClick={this.showExpandClick}
          >
            +
          </button>
        </div>
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
