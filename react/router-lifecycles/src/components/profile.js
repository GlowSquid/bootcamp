import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../hoc/card';
import Auth from '../hoc/auth';

const Profile = props => {
  // const redir = () => {
  // props.history.push('/posts/over9000');
  // };

  return (
    <Auth>
      <Card>
        <Link
          to={{
            pathname: `${props.match.url}/posts`
          }}
        >
          Take me to /profile/posts
        </Link>

        {/* {redir()} */}
      </Card>
    </Auth>
  );
};

export default Profile;
