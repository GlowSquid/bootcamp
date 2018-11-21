import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

// Components
import Header from './components/header';
import NewsList from './components/news_list';
// import NewsItem from './components/news_list_item';

class App extends Component {
  state = {
    news: JSON,
    filtered: []
  };

  getKeyword = e => {
    // console.log(e.target.value);
    const keyword = e.target.value;
    const filtered = this.state.news.filter(item => {
      return item.title.indexOf(keyword) > -1;
    });
    this.setState({
      filtered // filtered: filtered
    });

    // console.log(filtered);
  };

  render() {
    return (
      <div>
        <Header keywords={this.getKeyword} />
        <NewsList
          news={
            this.state.filtered.length === 0
              ? this.state.news
              : this.state.filtered
          }
          banana="Yellow"
        >
          <h2>Latest News</h2>
        </NewsList>
      </div>
    );
  }
}

// export default App;

ReactDOM.render(<App />, document.querySelector('#root'));
