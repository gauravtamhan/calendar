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
      markedDates: [],
      showMonthlyCount: false
    };
  }

  componentDidMount() {
    const year = new Date().getFullYear();
    this.setState({
      chosenYear: year
    });
    this.initMarkedDates(year);
    this.setState({
      showMonthlyCount: JSON.parse(localStorage.getItem('preference'))
    });
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.chosenYear !== this.state.chosenYear) {
      this.initMarkedDates(nextState.chosenYear);
    } else {
      localStorage.setItem(
        this.state.chosenYear,
        JSON.stringify(nextState.markedDates)
      );
      localStorage.setItem(
        'preference',
        JSON.stringify(nextState.showMonthlyCount)
      );
    }
  }

  initMarkedDates(year) {
    const entry = localStorage.getItem(year);
    if (entry) {
      this.setState({
        markedDates: JSON.parse(entry)
      });
    } else {
      this.setState({
        markedDates: []
      });
    }
  }

  setMonthlyCountVisibility = () => {
    this.setState({ showMonthlyCount: !this.state.showMonthlyCount });
  };

  updateYear = n => {
    this.setState({
      chosenYear: n > 0 ? this.state.chosenYear + 1 : this.state.chosenYear - 1
    });
  };

  addDate = newElement => {
    this.setState({
      markedDates: [...this.state.markedDates, newElement]
    });
  };

  removeDate = (m, d) => {
    this.setState({
      markedDates: this.state.markedDates.filter(
        obj => obj.month !== m || obj.day !== d
      )
    });
  };

  render() {
    const { chosenYear, markedDates, showMonthlyCount } = this.state;

    return (
      <div className="app">
        <TitleBar
          year={chosenYear}
          count={markedDates.length}
          updateYear={this.updateYear}
          showMonthlyCount={showMonthlyCount}
          setVisibility={this.setMonthlyCountVisibility}
        />
        {/* --- Fab --- */}
        <div className="fab-holder">
          <button
            id="fab"
            className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
          >
            <i className="material-icons">done</i>
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
                markedDates={markedDates}
                numDays={o.numDays}
                addDate={this.addDate}
                removeDate={this.removeDate}
                showMonthlyCount={showMonthlyCount}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
