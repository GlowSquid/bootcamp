import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
    this.changeNum = this.changeNum.bind(this);
  }

  changeNum() {
    this.setState({
      number: Math.floor(Math.random() * 10 + 1)
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Number Guesser</h1>
        <h3>The Number is {this.state.number}</h3>
        {this.state.number === 7 ? (
          <h1>You Win!</h1>
        ) : (
          <button onClick={this.changeNum}>Click to Win</button>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
