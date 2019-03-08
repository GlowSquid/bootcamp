import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Generation from './components/Generation';
import Creature from './components/Creature';

render(
  <div className="fish">
    <Generation />
    <Creature />
  </div>,
  document.getElementById('root')
);
