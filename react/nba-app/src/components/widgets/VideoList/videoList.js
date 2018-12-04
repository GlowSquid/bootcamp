import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../config';
import style from './videoList.module.css';
import Button from '../Buttons/buttons';
import VideoTemplate from './videoTemplate';

class VideoList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  renderTitle = title => {
    return title ? (
      <h3>
        <strong>NBA</strong> Videos
      </h3>
    ) : null;
  };

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`).then(resp => {
        this.setState({
          teams: resp.data
        });
      });
    }
    axios.get(`${URL}/videos?_start=${start}&_end=${end}`).then(resp => {
      this.setState({
        videos: [...this.state.videos, ...resp.data],
        start,
        end
      });
    });
  };

  renderVideos = type => {
    let template = null;
    switch (type) {
      case 'card':
        template = (
          <VideoTemplate data={this.state.videos} teams={this.state.teams} />
        );
        break;
      default:
        template = null;
    }
    return template;
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  };

  renderButton = loadmore => {
    return loadmore ? (
      <Button
        type="loadmore"
        loadMore={() => this.loadMore()}
        cta="Load More Videos"
      />
    ) : (
      <Button type="linkTo" cta="More Videos" linkTo="/videos" />
    );
  };

  render() {
    return (
      <div>
        <div className={style.videoList_wrapper}>
          {this.renderTitle(this.props.title)}
        </div>

        {this.renderVideos(this.props.type)}
        {this.renderButton(this.props.loadmore)}
      </div>
    );
  }
}

export default VideoList;
