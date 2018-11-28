import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';

import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav';

const Header = props => {
  const navBar = () => (
    <div className={style.bar}>
      <FontAwesome
        name="bars"
        onClick={props.onOpenNav}
        style={{ color: '#FFFFFF', padding: '10px', cursor: 'pointer' }}
      />
    </div>
  );

  const logo = () => (
    <Link to="/" className={style.logo}>
      <img src="/images/nba_logo.png" alt="NBA Logo" />
    </Link>
  );

  return (
    <header className={style.header}>
      <SideNav {...props} />
      <div className={style.headerOpt}>
        {navBar()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
