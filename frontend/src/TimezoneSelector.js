import React from 'react';

function TimezoneSelector(props) {
  const options = props.timezones.map((name, i) => {
    return(<option value={name} key={i}>{name}</option>)
  });

  return (
    <div>
      <select onChange={(e) => props.handler(e.target.value)}>
        {options}
      </select>
    </div>
  );
}

export default TimezoneSelector;
