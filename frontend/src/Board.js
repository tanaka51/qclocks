import React, { Component } from 'react';
import moment from 'moment-timezone';
import Clock from './Clock';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      baseDate: moment(),
    };
  }

  componentDidMount() {
    console.log(moment.tz.names());
    this.timerID = setInterval(
      () => this.refresh(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  refresh() {
    this.setState({
      baseDate: moment(),
    })
  }

  render() {
    return (
      <div>
        <Clock moment={this.state.baseDate.clone().tz('Asia/Tokyo')} />
        <Clock moment={this.state.baseDate.clone().tz('Europe/London')} />
      </div>
    );
  }
}

export default Board;
