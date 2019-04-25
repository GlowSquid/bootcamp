import React, { Component } from 'react';
import RollDice from './components/RollDice';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <RollDice />
      </div>
    );
  }
}
