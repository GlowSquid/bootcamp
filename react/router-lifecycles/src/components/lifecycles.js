import React, { PureComponent } from 'react';

class LifeCycles extends PureComponent {
  // 1st - Get Default Props
  // 2nd - Set Default State
  state = {
    title: 'Life Cycles'
  };

  //   // 3rd - Before rendering
  //   componentWillMount() {
  //     console.log('will mount');
  //   }

  //   componentWillUpdate() {
  //     console.log('Before update');
  //   }

  //   componentDidUpdate() {
  //     console.log('After update');
  //   }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.title === this.state.title) {
  //     return false;
  //   }
  //   return true;
  // }

  //   componentWillReceiveProps() {
  //     console.log('Before received props');
  //   }

  //   componentWillUnmount() {
  //     console.log('Component Will Unmount');
  //     // actions to take when user leaves component e.g. logging out
  //   }

  // 4th - Render JXS
  render() {
    console.log('Initial Render & whenever updated');
    return (
      <div>
        <h3>{this.state.title}</h3>
        <div
          onClick={() =>
            this.setState({
              title: 'Something Else'
            })
          }
        >
          Click to Change
        </div>
      </div>
    );
  }

  //   // 5th - After JSX
  //   componentDidMount() {
  //     console.log('did mount');
  //     document.querySelector('h3').style.color = 'red';
  //   }
}

export default LifeCycles;
