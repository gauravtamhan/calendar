import React, { Component } from 'react';
import TitleBar from 'components/TitleBar/index';
import Calendar from 'components/Calendar/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/style.css';

const monthData = [
  {
    month: 'January',
    numDays: 31
  },
  {
    month: 'February',
    numDays: 28
  },
  {
    month: 'March',
    numDays: 31
  },
  {
    month: 'April',
    numDays: 30
  },
  {
    month: 'May',
    numDays: 31
  },
  {
    month: 'June',
    numDays: 30
  },
  {
    month: 'July',
    numDays: 31
  },
  {
    month: 'August',
    numDays: 31
  },
  {
    month: 'September',
    numDays: 30
  },
  {
    month: 'October',
    numDays: 31
  },
  {
    month: 'November',
    numDays: 30
  },
  {
    month: 'December',
    numDays: 31
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenYear: null,
      count: 0
    };
  }

  componentDidMount() {
    const d = new Date();
    this.setState({
      chosenYear: d.getFullYear()
    });
  }

  updateYear = n => {
    this.setState({
      chosenYear: n > 0 ? this.state.chosenYear + 1 : this.state.chosenYear - 1
    });
  };

  render() {
    const { chosenYear, count } = this.state;

    return (
      <div className="app">
        <TitleBar
          year={chosenYear}
          count={count}
          updateYear={this.updateYear}
        />
        {/* --- Fab --- */}
        <div className="fab-holder">
          <button
            id="fab"
            className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
          >
            <i className="material-icons">calendar_today</i>
          </button>
          <div className="mdl-tooltip mdl-tooltip--left" data-mdl-for="fab">
            Mark Today Complete
          </div>
        </div>
        {/* --------- */}
        <div className="container-fluid">
          <div className="row">
            {monthData.map((o, i) => (
              <Calendar
                key={i}
                monthName={o.month}
                month={i}
                year={chosenYear}
                numDays={o.numDays}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
