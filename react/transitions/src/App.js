import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './css/App.css';

import CSStransition from './components/CSStransition';
import Tgroup from './components/tgroup';
import TransitionComp from './components/transitions';
import User from './components/user';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="anim_index">
          <Link to="/transitions">Transitions</Link>
          <Link to="/csstransition">CSS Transitions</Link>
          <Link to="/tgroup">Transitions Group</Link>
          <Link to="/user">Prop-Types User</Link>
        </div>
        <Route path="/transitions" component={TransitionComp} />
        <Route path="/csstransition" component={CSStransition} />
        <Route path="/tgroup" component={Tgroup} />
        <Route path="/user" component={User} />
      </div>
    </BrowserRouter>
  );
};

export default App;
