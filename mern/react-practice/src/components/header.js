import React, { Component } from "react";
import "../css/styles.css";

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
  inputChangeHandler(e) {
    console.log(e.target.value);
  }

  render() {
    // const styles = {
    //   logo: {
    //     fontFamily: "Lato",
    //     textAlign: "center"
    //   }
    // };

    return (
      <header>
        <div id="logo">Logo</div>
        <input type="text" onChange={this.inputChangeHandler} />
      </header>
    );
  }
}

export default Header;
