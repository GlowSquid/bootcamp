import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';

import style from '../../articles.module.css';

import Header from './header';
import VideosRelated from '../../../widgets/VideoList/VideosRelated/videosRelated';

class Videos extends Component {
  state = {
    article: [],
    team: [],
    teams: [],
    related: []
  };

  componentWillMount() {
    axios.get(`${URL}/videos?id=${this.props.match.params.id}`).then(resp => {
      let article = resp.data[0];

      axios.get(`${URL}/teams?id=${article.team}`).then(resp => {
        this.setState({
          article,
          team: resp.data
        });
        this.getRelated();
      });
    });
  }

  getRelated = () => {
    axios.get(`${URL}/teams`).then(resp => {
      let teams = resp.data;

      axios
        .get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
        .then(resp => {
          this.setState({
            teams,
            related: resp.data
          });
        });
    });
  };

  render() {
    const article = this.state.article;
    const team = this.state.team;
    return (
      <div>
        <Header teamData={team[0]} />
        <div className={style.video_wrapper}>
          <h1>{article.title}</h1>
          <iframe
            title="videoplayer"
            width="100%"
            height="300px"
            src={`https://www.youtube.com/embed/${article.url}`}
          />
        </div>
        <VideosRelated data={this.state.related} teams={this.state.teams} />
      </div>
    );
  }
}

export default Videos;
