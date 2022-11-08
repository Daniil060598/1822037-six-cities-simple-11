import { Offers } from '../../types/offers';
import ApartmentCard from '../apartment-card/apartment-card';

type OfferListProps = {
  offers: Offers;
  setActiveOfferId: (offerId: number) => void;
}

function OfferList({ offers, setActiveOfferId}: OfferListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <ApartmentCard key={offer.id} offer={offer} onCardHover={setActiveOfferId} />)}
    </div>
  );
}

export default OfferList;
