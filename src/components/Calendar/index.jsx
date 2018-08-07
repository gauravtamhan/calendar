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
      setTimeout(() => {
        this.setState({
          startingDay: start_day,
          today: today
        });
      }, 160);
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
    const { monthName, updateCount } = this.props;
    const { startingDay, today } = this.state;

    const computedDays = this.computeDays(startingDay);
    const numWeeksArr = Array.from(new Array(6), (val, index) => index);

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
                  <CSSTransition
                    key={i}
                    in={this.state.animateIn}
                    timeout={200}
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
                      updateCount={updateCount}
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
