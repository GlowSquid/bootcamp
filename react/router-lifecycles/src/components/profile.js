import React from 'react';
import { Link } from 'react-router-dom';

const Profile = props => {
  const redir = () => {
    props.history.push('/posts/over9000');
  };

  return (
    <div>
      <h1>Hey</h1>
      <Link
        to={{
          pathname: `${props.match.url}/posts`
        }}
      >
        Take me to /profile/posts
      </Link>

      {redir()}
    </div>
  );
};

export default Profile;
