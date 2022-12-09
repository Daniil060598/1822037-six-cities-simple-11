import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';
import RatingStars from '../rating-stars/rating-stars';

type ApartmentCardProps = {
  offer: Offer;
  className: string;
  onCardHover: (offerId: number) => void;
}

function ApartmentCard({ offer, className, onCardHover }: ApartmentCardProps): JSX.Element {
  return (
    <article
      className={`${className} place-card`}
      onMouseEnter={() => onCardHover(offer.id)}
      onMouseLeave={() => onCardHover(0)}
    >
      {offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">
              &#47;&nbsp;night
            </span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <RatingStars rating={offer.rating} className={'place-card__stars'}/>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default memo(ApartmentCard);
