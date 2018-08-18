import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Observer from 'react-intersection-observer';

class ScrollAppear extends React.Component {
  state = {
    visible: false,
  };

  handleIntersection = (inView) => {
    if (inView && !this.state.visible) {
      this.setState({ visible: true });
    }
  };

  render() {
    const { children, direction } = this.props;
    const { visible } = this.state;

    const appearClass = classnames('plex-requests__scroll-appear', direction, {
      'is-visible': visible,
    });

    return (
      <Observer onChange={this.handleIntersection}>
        <div className={appearClass}>{children}</div>
      </Observer>
    );
  }
}

ScrollAppear.propTypes = {
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  children: PropTypes.node.isRequired,
};

ScrollAppear.defaultProps = {
  direction: 'up',
};

export default ScrollAppear;
