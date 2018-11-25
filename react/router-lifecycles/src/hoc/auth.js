import React from 'react';

const Auth = props => {
  const pass = 'passwørd';

  if (pass !== 'passwørd1') {
    return <h3>Incorrect password!</h3>;
  } else {
    return props.children;
  }
};

export default Auth;
