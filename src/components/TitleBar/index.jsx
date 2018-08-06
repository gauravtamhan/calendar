import React, { Component } from 'react';
import logo from 'assets/logo-shadow.png';

class TitleBar extends Component {
  render() {
    const { year, count, updateYear } = this.props;
    return (
      <header>
        <div className="logo d-none d-md-block">
          <img src={logo} alt="" />
          <span>Countdown Calendar</span>
        </div>
        <div className="data">
          <div className="year-box">
            <div className="btn-group">
              <button
                className="mdl-button mdl-js-button mdl-button--icon"
                onClick={() => {
                  updateYear(-1);
                }}
              >
                <i className="material-icons">chevron_left</i>
              </button>
              <button
                className="mdl-button mdl-js-button mdl-button--icon"
                onClick={() => {
                  updateYear(1);
                }}
              >
                <i className="material-icons">chevron_right</i>
              </button>
            </div>
            <span>{year}</span>
          </div>
          <div className="count-box">
            <span className="count" id="cc">
              {count}
            </span>
          </div>
          <div className="mdl-tooltip" data-mdl-for="cc">
            Total Count
          </div>
        </div>
      </header>
    );
  }
}

export default TitleBar;
