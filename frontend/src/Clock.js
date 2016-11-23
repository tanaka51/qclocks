import React from 'react';

function Timer(props) {
  return (
    <p>
      {props.moment.format('HH:mm:ss z')}
    </p>
  )
}

export default Timer;
