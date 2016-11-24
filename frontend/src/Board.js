import React, { Component } from 'react';
import moment from 'moment-timezone';
import TimezoneSelector from './TimezoneSelector';
import Shelf from './Shelf';
import './Board.css'

class Board extends Component {
  constructor() {
    super();
    this.state = {
      timezones: ['Asia/Tokyo']
    };
  }

  addTimezone(timezone) {
    const timezones = this.state.timezones.slice();
    this.setState({
      timezones: timezones.concat([timezone])
    });
  }

  removeTimezone(timezone) {
    const timezones = this.state.timezones.slice();
    this.setState({
      timezones: timezones.filter((t) => t !== timezone)
    });
  }

  render() {
    return (
      <div className='Board'>
        <TimezoneSelector
          timezones={moment.tz.names()}
          handler={(timezone) => this.addTimezone(timezone)} />

        <Shelf
          timezones={this.state.timezones}
          removeHandler={(timezone) => this.removeTimezone(timezone)} />
      </div>
    );
  }
}

export default Board;
