import React, { Component } from 'react';
import moment from 'moment-timezone';
import Clock from './Clock';

class Shelf extends Component {
  constructor() {
    super();
    this.state = {
      baseDate: moment(),
    };
  }

  componentDidMount() {
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
    const clocks = this.props.timezones.map((timezone, i) => {
      return (
        <div key={i}>
          <span>{timezone}</span>
          <button onClick={(e) => this.props.removeHandler(timezone)}>
            X
          </button>
          <Clock moment={this.state.baseDate.clone().tz(timezone)} />
        </div>
      )
    });

    return (
      <div>
        {clocks}
      </div>
    );
  }
}

export default Shelf;
