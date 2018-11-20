import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

// Components
import Header from './components/header';
import NewsList from './components/news_list';
// import NewsItem from './components/news_list_item';

class App extends Component {
  state = {
    news: JSON
  };

  render() {
    return (
      <div>
        <Header />
        <NewsList news={this.state.news} banana="Yellow">
          <h2>Latest News</h2>
        </NewsList>
      </div>
    );
  }
}

// export default App;

ReactDOM.render(<App />, document.querySelector('#root'));
