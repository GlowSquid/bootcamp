import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import './NavBar.css';

const NavBar = props => {
  return (
    <AuthContext.Consumer>
      {context => {
        return (
          <header className="navbar">
            <div className="navbar__logo">
              <h1>Event Booker</h1>
            </div>
            <nav className="navbar__items">
              <ul>
                {!context.token && (
                  <li>
                    <NavLink to="/auth">Auth</NavLink>
                  </li>
                )}
                <li>
                  <NavLink to="/events">Events</NavLink>
                </li>
                {context.token && (
                  <React.Fragment>
                    <li>
                      <NavLink to="/bookings">Bookings</NavLink>
                    </li>
                    <li>
                      <button onClick={context.logout}>Log Out</button>
                    </li>
                  </React.Fragment>
                )}
              </ul>
            </nav>
          </header>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default NavBar;
