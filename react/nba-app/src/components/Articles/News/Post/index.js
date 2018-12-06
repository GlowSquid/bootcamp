import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';

import Header from './header';
import style from '../../articles.module.css';

class Articles extends Component {
  state = {
    article: [],
    team: []
  };

  componentWillMount() {
    axios.get(`${URL}/articles?id=${this.props.match.params.id}`).then(resp => {
      let article = resp.data[0];

      axios.get(`${URL}/teams?id=${article.team}`).then(resp => {
        this.setState({
          article,
          team: resp.data
        });
      });
    });
  }

  render() {
    const article = this.state.article;
    const team = this.state.team;

    return (
      <div className={style.article_wrapper}>
        <Header
          teamData={team[0]}
          date={article.date}
          author={article.author}
        />
        {/* <Body /> */}
        <div className={style.articleBody}>
          <h1>{article.title}</h1>
          <div
            className={style.articleImage}
            style={{
              background: `url('/images/articles/${article.image}')`
            }}
          />
          <div className={style.articleText}>{article.body}</div>
        </div>
      </div>
    );
  }
}

export default Articles;
