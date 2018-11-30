// Stateless Component
import React from 'react';
import { Link } from 'react-router-dom';

// curly braces because it's inside an object
import { CURRENT_YEAR } from '../../config';

import style from './footer.module.css';

const Footer = () => (
  <div className={style.footer}>
    <Link to="/" className={style.logo}>
      <img src="/images/nba_logo.png" alt="nba-logo" />
    </Link>
    <div className={style.right}>
      {'\u00A9'} NBA {CURRENT_YEAR} All Rights Reserved
    </div>
  </div>
);

export default Footer;
