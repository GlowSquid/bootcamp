import React from 'react';
import VideoList from '../../../widgets/VideoList/videoList';

const VideosMain = () => (
  <VideoList type="card" title={false} loadmore={true} start={0} amount={8} />
);

export default VideosMain;
