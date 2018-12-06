import React from 'react';
import VideoListTemplate from '../videoTemplate';

import style from '../videoList.module.css';

const VideosRelated = props => (
  <div className={style.related_wrapper}>
    <VideoListTemplate data={props.data} teams={props.teams} />
  </div>
);

export default VideosRelated;
