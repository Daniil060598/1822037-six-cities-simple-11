import { memo } from 'react';
import { OfferListClassName } from '../../const';
import { Offers } from '../../types/offers';
import OfferList from '../offer-list/offer-list';

type RoomOffersNearbyProps = {
  offersNearby: Offers;
  onCardHover: (offerId: number) => void;
}

function RoomOffersNearby({offersNearby, onCardHover}: RoomOffersNearbyProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <OfferList offers={offersNearby} className={OfferListClassName.Room} onCardHover={onCardHover} />
    </section>
  );
}

export default memo(RoomOffersNearby);
