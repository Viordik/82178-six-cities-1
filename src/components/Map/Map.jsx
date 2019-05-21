import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 40]
});

const MAP_LAYER_URL_TEMPLATE = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`;
const MAP_LAYER_OPTIONS = {
  attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
};

export class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.map = null;
  }

  componentDidMount() {
    const {city, zoom} = this.props;

    this.map = leaflet.map(`map`, {
      center: city.location,
      zoom,
      zoomControl: false,
      marker: true
    });

    leaflet.tileLayer(MAP_LAYER_URL_TEMPLATE, MAP_LAYER_OPTIONS).addTo(this.map);

    this.props.locations.forEach((location) => {
      this.drawMarker(location);
    });
  }

  componentDidUpdate() {
    const {city, locations, zoom} = this.props;

    this.map.setView(city.location, zoom);

    locations.forEach((location) => {
      this.drawMarker(location);
    });
  }

  componentWillUnmount() {
    this.map.remove();
    this.map = null;
  }

  drawMarker(cords) {
    return leaflet.marker(cords, {icon}).addTo(this.map);
  }

  render() {
    return <section id="map" className="cities__map map" />;
  }
}

Map.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  city: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.arrayOf(PropTypes.number)
  }),
  zoom: PropTypes.number
};
