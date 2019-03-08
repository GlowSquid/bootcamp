import React, { Component } from 'react';
import CreatureAvatar from './CreatureAvatar';

const DEFAULT_CREATURE = {
  creatureId: '',
  generationId: '',
  nickname: '',
  birthdate: '',
  traits: []
};

class Creature extends Component {
  state = { creature: DEFAULT_CREATURE };

  componentDidMount() {
    this.fetchCreature();
  }

  fetchCreature = () => {
    fetch('http://localhost:5002/creature/new')
      .then(response => response.json())
      .then(json => this.setState({ creature: json.creature }))
      .catch(err => console.error('error:', err));
  };

  render() {
    return (
      <div>
        <button className="btn" onClick={this.fetchCreature}>
          New Creature
        </button>
        <CreatureAvatar creature={this.state.creature} />
      </div>
    );
  }
}

export default Creature;
