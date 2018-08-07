import React, { Component } from 'react';
import Day from 'components/Day/index';

class Week extends Component {
  render() {
    const { month, week, today, markedDates, addDate, removeDate } = this.props;

    return (
      <tr>
        {week.map((val, i) => (
          <Day
            key={i}
            day={val}
            today={today}
            month={month}
            markedDates={markedDates}
            addDate={addDate}
            removeDate={removeDate}
          />
        ))}
      </tr>
    );
  }
}

export default Week;
