import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../PlaceCard/PlaceCard';

const ListOffers = (props) => {
  const {offers} = props;

  const onClickImage = useCallback(
      (event, offer) => {
        console.log(offer);
      },
      []
  );

  const onClickTitle = useCallback(
      (event, offer) => {
        console.log(offer);
      },
      []
  );

  return (
    offers.map((offer) => (
      <PlaceCard key={offer.id} offer={offer} onClickImage={onClickImage} onClickTitle={onClickTitle} />
    ))
  );
};

ListOffers.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        premium: PropTypes.bool,
        srcImg: PropTypes.string,
        price: PropTypes.number,
        bookmarks: PropTypes.bool,
        title: PropTypes.string,
        type: PropTypes.oneOf([`Apartment`, `Private room`])
      })
  )
};

export default ListOffers;
