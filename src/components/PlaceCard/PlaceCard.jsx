import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

const PlaceCard = (props) => {
  const {offer} = props;

  const onClickImage = useCallback((event) => {
    props.onClickImage(event, offer);
  }, [offer]);

  const onClickTitle = useCallback((event) => {
    props.onClickTitle(event, offer);
  }, [offer]);

  return (
    <article className="cities__place-card place-card">
      <div className="place-card__mark">
        <span>{offer.premium}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#" onClick={onClickImage}>
          <img className="place-card__image" src={offer.srcImg} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `93%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a className="link-item" href="#" onClick={onClickTitle}>{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number,
    premium: PropTypes.bool,
    srcImg: PropTypes.string,
    price: PropTypes.number,
    bookmarks: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.oneOf([`Apartment`, `Private room`])
  }),
  onClickTitle: PropTypes.func,
  onClickImage: PropTypes.func
};

export default PlaceCard;
