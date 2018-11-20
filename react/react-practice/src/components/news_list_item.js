import React from 'react';
// import classes from '../css/styles.css';
// import { css } from 'glamor';

const NewsItem = ({ item }) => {
  // const news_item = css({
  //   padding: '20px',
  //   boxSizing: 'border-box',
  //   borderTop: '1px solid grey',
  //   ':hover': {
  //     backgroundColor: '#87d9ff'
  //   }
  // });

  // const blueish = css({
  //   color: '#4C0000'
  // });

  return (
    // <div className={`${news_item} ${blueish}`}>
    // <div className={classes.news_item}>
    <div>
      <h3>{item.title}</h3>
      <p>{item.feed}</p>
    </div>
  );
};

export default NewsItem;
