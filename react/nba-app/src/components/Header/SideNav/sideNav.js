import React from 'react';
import SideNav from 'react-simple-sidenav';

const SideNavigation = props => {
  return (
    <div>
      <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        navStyle={{
          background: '#000000',
          maxWidth: '150px',
          color: '#FFFFFF'
        }}
      >
        <div>Home</div>
        <div>News</div>
      </SideNav>
    </div>
  );
};

export default SideNavigation;
