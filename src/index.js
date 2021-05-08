import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppContent from './AppContent';
import AppFooter from './footer';
import './index.css';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <AppContent />
        <AppFooter />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
