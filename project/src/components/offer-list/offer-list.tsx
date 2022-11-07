import { Offers } from '../../types/offers';
import ApartmentCard from '../apartment-card/apartment-card';
import { useState } from 'react';

type OfferListProps = {
  offers: Offers;
}

function OfferList({ offers }: OfferListProps): JSX.Element {

  const [, setActiveOffer] = useState({});

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <ApartmentCard key={offer.id} offer={offer} onCardHover={setActiveOffer} />)}
    </div>
  );
}

export default OfferList;
