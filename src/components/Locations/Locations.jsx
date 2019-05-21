import React from 'react';
// import PropTypes from 'prop-types';

const Locations = (props) => {
  const {city} = props;

  return (
    <React.Fragment>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span>{city}</span>
        </a>
      </li>
    </React.Fragment>
  );
};

// Locations.PropTypes = {
//   city: PropTypes.string
// };

export default Locations;
