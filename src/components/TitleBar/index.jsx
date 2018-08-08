import React, { Component } from 'react';
import logo from 'assets/logo.png';

class TitleBar extends Component {
  render() {
    const { year, count, updateYear, setVisibility } = this.props;
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

          <div>
            <div className="btn-wrapper">
              <button
                id="menu-lower-right"
                className="mdl-button mdl-js-button mdl-button--icon"
              >
                <i className="material-icons">settings</i>
              </button>
              <ul
                className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                htmlFor="menu-lower-right"
              >
                <li
                  className="mdl-menu__item"
                  onClick={() => {
                    setVisibility();
                  }}
                >
                  Toggle Monthly Count
                </li>
              </ul>
            </div>
            <span className="count" id="cc">
              {count}
            </span>
          </div>
          <div className="mdl-tooltip" data-mdl-for="cc">
            Yearly Total
          </div>
        </div>
      </header>
    );
  }
}

export default TitleBar;
