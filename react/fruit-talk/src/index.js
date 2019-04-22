import React from 'react';
import ReactDOM from 'react-dom';

import { randomizeItems, removeItems } from './helpers';
import fruits from './foods';

import './index.css';

// import {
//   helpful as helpfulHelper,
//   notHelpful as notsoHelpfulHelper,
//   sort
// } from './helpers';

// helpfulHelper();
// notsoHelpfulHelper();
// sort();

const randomFruit = randomizeItems(fruits);
const fruitsLeft = removeItems(fruits, randomFruit);

const Index = () => {
  return (
    <div>
      <h1>Fruit-Talk</h1>
      <p className="buyer">I'd like a {randomFruit}, please.</p>
      <p className="seller">Here you go: One {randomFruit}.</p>
      <p className="buyer">Yummy! May I have another one?</p>
      <p className="seller">
        Sorry, you ate the last {randomFruit}. We only have {fruitsLeft} in
        stock.
      </p>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
