import React, { Component } from 'react';

export default class Die extends Component {
  render() {
    return (
      <div>
        <i
          className={`${this.props.rolling && 'rolling'} fas fa-dice-${
            this.props.face
          }`}
        />
      </div>
    );
  }
}
