import React, { Component } from 'react';

class Uncontrolled extends Component {
  handleSubmitClick = e => {
    e.preventDefault();

    const values = {
      first: this.first.value,
      last: this.last.value
    };
    console.log(values);
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="form_element">
            <label>First Name</label>
            <input type="text" ref={input => (this.first = input)} />
          </div>

          <div className="form_element">
            <label>Last Name</label>
            <input type="text" ref={input => (this.last = input)} />
          </div>
          <button onClick={this.handleSubmitClick}>Sign in</button>
        </form>
      </div>
    );
  }
}

export default Uncontrolled;
