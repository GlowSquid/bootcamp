import React from 'react';
import PropTypes from 'prop-types';

const UserTemplate = props => {
  console.log(props);
  return <div>UserTemplate</div>;
};

UserTemplate.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf(['Stephen', 'Peter'])
  ]),
  lastName: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  spanish: PropTypes.bool,
  message: PropTypes.func,
  car: PropTypes.object,
  mother: function(props, propName, component) {
    if (props[propName] !== 'Lorna') {
      return new Error(`The name ${props[propName]} is incorrect`);
    }
  }
};

export default UserTemplate;
