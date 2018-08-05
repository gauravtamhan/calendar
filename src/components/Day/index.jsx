import React, { Component } from 'react';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { day, today } = this.props;

    const isCurrentDay =
      today.isActiveMonth && today.isCurrentYear && today.date === day;
    return (
      <td>
        {day !== '' && (
          <span className={isCurrentDay ? 'today' : ''}>{day}</span>
        )}
      </td>
    );
  }
}

export default Day;
