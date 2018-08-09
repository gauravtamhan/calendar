import React, { Component } from 'react';
import AutosizeInput from 'react-input-autosize';
import logo from 'assets/logo.png';

class TitleBar extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.textInput.current.blur();
    }
  };

  render() {
    const {
      year,
      count,
      updateYear,
      setVisibility,
      title,
      handleTextInput,
      setTheme
    } = this.props;
    return (
      <header>
        <div
          className="mdl-tooltip mdl-tooltip--right"
          data-mdl-for="countdown"
        >
          Rename your calendar
        </div>
        <div className="logo d-none d-md-flex">
          <img src={logo} alt="" />
          <AutosizeInput
            ref={this.textInput}
            id="countdown"
            name="form-field-name"
            type="text"
            autoComplete="off"
            placeholder="Untitled"
            value={title}
            onChange={handleTextInput}
            onKeyPress={this.handleKeyPress}
          />
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
                <i className="material-icons">brush</i>
              </button>
              <ul
                className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                htmlFor="menu-lower-right"
              >
                <li
                  className="mdl-menu__item"
                  onClick={() => {
                    setTheme('blue');
                  }}
                >
                  <span className="splotch blue" />
                  Ocean Blue
                </li>
                <li
                  className="mdl-menu__item"
                  onClick={() => {
                    setTheme('red');
                  }}
                >
                  <span className="splotch red" />
                  Fire Red
                </li>
                <li
                  className="mdl-menu__item"
                  onClick={() => {
                    setTheme('green');
                  }}
                >
                  <span className="splotch green" />
                  Lime Green
                </li>
                <li
                  className="mdl-menu__item"
                  onClick={() => {
                    setTheme('grey');
                  }}
                >
                  <span className="splotch grey" />
                  Midnight Gray
                </li>
                <li
                  className="mdl-menu__item mdl-menu__item--full-bleed-divider"
                  onClick={() => {
                    setTheme('purple');
                  }}
                >
                  <span className="splotch purple" />
                  Orchid Purple
                </li>
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
