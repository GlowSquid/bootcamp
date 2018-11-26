import React, { Component } from 'react';
import UserTemplate from './user_template';

export default class User extends Component {
  state = {
    name: 'Stephen',
    lastName: 'Colbert',
    age: 54,
    hobbies: ['Host', 'Talk'],
    spanish: false,
    message() {
      console.log('Trump Sucks');
    },
    car: { brand: 'Tesla', model: 'Model S' },
    mother: 'Lorna'
  };

  render() {
    return (
      <div>
        <UserTemplate {...this.state} />
      </div>
    );
  }
}
