import React from 'react';
import PropTypes from 'prop-types';

const Locations = (props) => {
  const {city, onClick} = props;

  return (
    <React.Fragment>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#" onClick={(event) => onClick(event, city)}>
          <span>{city.name}</span>
        </a>
      </li>
    </React.Fragment>
  );
};

Locations.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number)
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Locations;
