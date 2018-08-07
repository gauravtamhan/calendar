import React, { Component } from 'react';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMarked: false
    };
  }

  toggleMark = () => {
    const newMarkedState = !this.state.isMarked;
    if (newMarkedState) {
      this.props.updateCount(1);
    } else {
      this.props.updateCount(-1);
    }
    this.setState({
      isMarked: newMarkedState
    });
  };

  render() {
    const { day, today } = this.props;
    const { isMarked } = this.state;
    const isCurrentDay =
      today.isActiveMonth && today.isCurrentYear && today.date === day;

    return (
      <td>
        {day !== '' && (
          <span
            className={
              (isCurrentDay ? 'today' : '') + ' ' + (isMarked ? 'marked' : '')
            }
            onClick={this.toggleMark}
          >
            {day}
          </span>
        )}
      </td>
    );
  }
}

export default Day;
