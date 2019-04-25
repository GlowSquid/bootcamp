import React, { Component } from 'react';
import Die from './Die';
import './Die.css';

export default class RollDice extends Component {
  static defaultProps = {
    nums: ['one', 'two', 'three', 'four', 'five', 'six']
  };
  constructor(props) {
    super(props);
    this.state = {
      randomValue1: 'five',
      randomValue2: 'two',
      rolling: false
    };
    this.roll = this.roll.bind(this);
  }

  roll() {
    const newDie1 = this.props.nums[
      Math.floor(Math.random() * this.props.nums.length)
    ];
    const newDie2 = this.props.nums[
      Math.floor(Math.random() * this.props.nums.length)
    ];

    this.setState({
      randomValue1: newDie1,
      randomValue2: newDie2,
      rolling: true
    });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
    // const numbs = ['one', 'two', 'three', 'four', 'five', 'six'];
    // const value1 =
    //   'fas fa-dice-' + numbs[Math.floor(Math.random() * numbs.length)];
    // const value2 =
    //   'fas fa-dice-' + numbs[Math.floor(Math.random() * numbs.length)];
    // this.setState({
    //   randomValue1: value1,
    //   randomValue2: value2
    // });
  }

  render() {
    return (
      <div>
        <h1>Dice Roll</h1>
        <div className="dices">
          <Die face={this.state.randomValue1} rolling={this.state.rolling} />
          <Die face={this.state.randomValue2} rolling={this.state.rolling} />
        </div>
        <button
          className="btn"
          onClick={this.roll}
          disabled={this.state.rolling}
        >
          {this.state.rolling ? 'Rolling' : 'Roll Now!'}
        </button>
      </div>
    );
  }
}
