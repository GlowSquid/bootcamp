import React, { Component } from 'react';

const DEFAULT_GENERATION = { generationId: '', expiration: '' };

const MINIMUM_DELAY = 3000;

class Generation extends Component {
  state = { generation: DEFAULT_GENERATION };

  timer = null;

  componentDidMount() {
    this.fetchNextGeneration();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  fetchGeneration = () => {
    fetch('http://localhost:5002/generation')
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        this.setState({ generation: json.generation });
      })
      .catch(error => console.log('error', error));
  };

  fetchNextGeneration = () => {
    this.fetchGeneration();

    let delay =
      new Date(this.state.generation.expiration).getTime() -
      new Date().getTime();

    if (delay < MINIMUM_DELAY) {
      delay = MINIMUM_DELAY;
    }

    this.timer = setTimeout(() => this.fetchNextGeneration(), delay);
  };

  render() {
    const { generation } = this.state;

    return (
      <div>
        <h3>Generation {generation.generationId}</h3>
        <h4>Expires on: {new Date(generation.expiration).toString()}</h4>
      </div>
    );
  }
}

export default Generation;
