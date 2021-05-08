import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppFooter from './footer';
import './index.css';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <AppFooter />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
