import React, { Component } from 'react';
import Week from 'components/Week/index';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startingDay: null,
      today: {}
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.year !== this.props.year) {
      const start_day = new Date(newProps.year, this.props.month, 1).getDay();
      const d = new Date();
      const today = {
        date: d.getDate(),
        isCurrentYear: d.getFullYear() === newProps.year,
        isActiveMonth: d.getMonth() === this.props.month
      };
      this.setState({
        startingDay: start_day,
        today: today
      });
    }
  }

  computeDays = start_day => {
    var day = 1;
    const result = [];
    for (let i = 0; day <= this.props.numDays; i++) {
      if (i >= start_day) {
        result.push(day);
        day++;
      } else {
        result.push('');
      }
    }
    return result;
  };

  render() {
    const { monthName, numDays } = this.props;
    const { startingDay, today } = this.state;

    const computedDays = this.computeDays(startingDay);
    const numWeeks = Math.ceil((startingDay + numDays) / 7);
    const numWeeksArr = Array.from(new Array(numWeeks), (val, index) => index);

    return (
      <div className="col-12 col-md-6 col-lg-4 col-xl-3">
        <div className="cal">
          <div className="header">
            <span>{monthName}</span>
          </div>
          <div className="body">
            <table>
              <tbody>
                <tr className="weekdays">
                  <td>S</td>
                  <td>M</td>
                  <td>T</td>
                  <td>W</td>
                  <td>T</td>
                  <td>F</td>
                  <td>S</td>
                </tr>
                {numWeeksArr.map(i => (
                  <Week
                    key={i}
                    week={computedDays.splice(0, 7)}
                    today={today}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
