import React, { useState } from 'react';

import Joke from './Joke';
import Stories from './Stories';

function App() {
  const [userQuery, setUserQuery] = useState('1 eur to usd');
  // const state = useState();
  // const userQuery = state[0];
  // const setUserQuery = state[1]

  const updateUserQuery = e => {
    // console.log(userQuery);
    setUserQuery(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      searchQuery();
    }
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  };

  return (
    <div className="App">
      <h1>Heya</h1>
      <div className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <Stories />
    </div>
  );
}

export default App;
