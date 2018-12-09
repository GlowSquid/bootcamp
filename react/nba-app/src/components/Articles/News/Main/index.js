import React from 'react';

import Slider from '../../../widgets/NewsSlider/slider';
import NewsList from '../../../widgets/NewsList/newsList';

const News = () => {
  return (
    <div>
      <Slider type="featured" settings={{ dots: false }} start={0} amount={3} />
      <NewsList type="cardMain" loadMore={true} start={3} amount={3} />
    </div>
  );
};

export default News;
