import React, { Component } from 'react';
import Day from 'components/Day/index';

class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { week, today } = this.props;

    return (
      <tr>
        {week.map((val, i) => (
          <Day key={i} day={val} today={today} />
        ))}
      </tr>
    );
  }
}

export default Week;
