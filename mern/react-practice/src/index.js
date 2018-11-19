import React from "react";
import ReactDOM from "react-dom";

// Components
import Header from "./components/header";

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
