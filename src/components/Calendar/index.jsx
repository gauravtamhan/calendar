import React, { Component } from 'react';
import Week from 'components/Week/index';
import { CSSTransition } from 'react-transition-group';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startingDay: null,
      animateIn: true,
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

      this.setState({
        animateIn: false
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
    const {
      monthName,
      month,
      markedDates,
      showMonthlyCount,
      addDate,
      removeDate
    } = this.props;
    const { startingDay, today } = this.state;

    const computedDays = this.computeDays(startingDay);
    const numWeeksArr = Array.from(new Array(6), (val, index) => index);

    const miniCount = showMonthlyCount
      ? markedDates.filter(obj => obj.month === month).length
      : 0;

    return (
      <div className="col-12 col-md-6 col-lg-4 col-xl-3">
        <div className="cal">
          <div className="header">
            <span>{monthName}</span>
            {showMonthlyCount && (
              <div className="mini-count">
                <span>{miniCount}</span>
              </div>
            )}
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
                  <CSSTransition
                    key={i}
                    in={this.state.animateIn}
                    timeout={100}
                    classNames="fade"
                    onExited={() => {
                      this.setState({
                        animateIn: true
                      });
                    }}
                  >
                    <Week
                      week={computedDays.splice(0, 7)}
                      today={today}
                      month={month}
                      markedDates={markedDates}
                      addDate={addDate}
                      removeDate={removeDate}
                    />
                  </CSSTransition>
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
