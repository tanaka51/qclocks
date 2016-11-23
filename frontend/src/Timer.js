import React, { Component } from 'react';

class Timer extends Component {
  render() {
    return (
      <p>
        {this.props.hour}:{this.props.minutes}
      </p>
    )
  }
}

export default Timer;
