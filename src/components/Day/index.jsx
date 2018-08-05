import React, { Component } from 'react';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { day } = this.props;

    return <td>{day !== '' && <span>{day}</span>}</td>;
  }
}

export default Day;
