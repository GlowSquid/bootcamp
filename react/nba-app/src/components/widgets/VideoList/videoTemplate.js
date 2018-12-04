import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/cardInfo';
import style from './videoList.module.css';

const VideoTemplate = props => {
  return props.data.map((item, i) => {
    return (
      <Link to={`/videos/${item.id}`} key={i}>
        <div className={style.videoListItem_wrapper}>
          <div
            className={style.left}
            style={{
              background: `url(/images/videos/${item.image})`
            }}
          >
            <div>kek</div>
          </div>
          <div className={style.right}>
            <CardInfo teams={props.teams} team={item.team} date={item.date} />
            <h2>{item.title}</h2>
          </div>
        </div>
      </Link>
    );
  });
};

export default VideoTemplate;
