import React, { Component } from 'react';
import '../css/styles.css';

// const getYear = () => {
//   const newDate = new Date();
//   return newDate.getFullYear();
// };

// const user = {
//   name: "Johnny",
//   lastName: "Knoxsville",
//   age: 47
// };

// const Header = () => {
// return <div>The year is {getYear()}</div>;
// return <div>5 + 5 = {5 + 5}</div>;
// return (
//   <div> <p>{user.name} {user.lastName}, {user.age}</p></div>
// );
// };

class Header extends Component {
  state = {
    active: false,
    keywords: 'Hello'
  };

  inputChangeHandler = e => {
    // console.log(e.target.value);
    const value = e.target.value === '' ? false : true;
    this.setState({
      active: value,
      keywords: e.target.value
    });
  };

  render() {
    // const styles = {
    //   logo: {
    //     fontFamily: "Lato",
    //     textAlign: "center"
    //   }
    // };

    return (
      <header
        style={{ background: `${this.state.active ? 'blue' : '#03a9f4'} ` }}
      >
        <div id="logo">NewsFinder</div>
        <input type="text" onChange={this.inputChangeHandler} />
      </header>
    );
  }
}

export default Header;
