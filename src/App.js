import React, { Component } from 'react';
import './App.scss';
import './index.scss';
import Card from './Components/Card/Card.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

export default App;
