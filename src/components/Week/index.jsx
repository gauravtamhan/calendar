import React, { Component } from 'react';
import Day from 'components/Day/index';

class Week extends Component {
  render() {
    const { week, today, updateCount } = this.props;

    return (
      <tr>
        {week.map((val, i) => (
          <Day key={i} day={val} today={today} updateCount={updateCount} />
        ))}
      </tr>
    );
  }
}

export default Week;
