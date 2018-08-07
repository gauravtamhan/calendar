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
      this.props.addDate({
        month: this.props.month,
        day: this.props.day
      });
    } else {
      this.props.removeDate(this.props.month, this.props.day);
    }
    this.setState({
      isMarked: newMarkedState
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      isMarked: false
    });
    const foundMatch = nextProps.markedDates.filter(
      obj => obj.month === nextProps.month && obj.day === nextProps.day
    );
    if (foundMatch.length > 0) {
      this.setState({
        isMarked: true
      });
    }
  }

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
