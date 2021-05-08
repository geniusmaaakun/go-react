import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import AppFooter from './footer';

class App extends Component {

  render() {
    return (
      <Fragment>
        <h1>Hello, world!</h1>
        <AppFooter />
      </Fragment>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
