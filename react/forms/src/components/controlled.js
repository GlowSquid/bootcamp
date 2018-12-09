import React, { Component } from 'react';

class Controlled extends Component {
  state = {
    first: '',
    last: ''
  };

  handleFirstChange = e => {
    this.setState({
      first: e.target.value
    });
  };

  handleLastChange = e => {
    this.setState({
      last: e.target.value
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmitHandler}>
          <div className="form_element">
            <label>First Name</label>
            <input
              type="text"
              onChange={this.handleFirstChange}
              value={this.state.first}
            />
          </div>

          <div className="form_element">
            <label>Last Name</label>
            <input
              type="text"
              onChange={this.handleLastChange}
              value={this.state.last}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Controlled;
