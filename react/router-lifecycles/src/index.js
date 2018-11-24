import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  // Link,
  NavLink,
  Switch
} from 'react-router-dom';

// Components
import Home from './components/home';
import Posts from './components/posts';
import PostItem from './components/postItem';
import Profile from './components/profile';
import LifeCycles from './components/lifecycles';
import Conditional from './components/conditional';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavLink to="/">Home</NavLink>
          <br />
          <NavLink
            to="/posts"
            activeStyle={{ color: 'red' }}
            activeClassName="selected"
          >
            Posts
          </NavLink>
          <br />
          <NavLink
            to={{
              pathname: '/profile',
              hash: '#CancelSouthPark',
              search: '?profile=true'
            }}
          >
            Profile
          </NavLink>
          <br />
          <NavLink to="/lifecycles">Life Cycles</NavLink>
          <br />
          <NavLink to="/conditional">Conditional</NavLink>
          <br />
          <hr />
        </header>
        <Switch>
          <Route path="/posts/:id" component={PostItem} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/lifecycles" component={LifeCycles} />
          <Route path="/conditional" component={Conditional} />
          <Route path="/" exact component={Home} />
          {/* <Route render={() => <h3>Oops 404 - Page Not Found</h3>} /> */}
          <Route component={Posts} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
