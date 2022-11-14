import { OfferCardClassName } from '../../const';
import { Offers } from '../../types/offers';
import ApartmentCard from '../apartment-card/apartment-card';

type OfferListProps = {
  offers: Offers;
  className: string;
  setActiveOfferId: (offerId: number) => void;
}

function OfferList({ offers, className, setActiveOfferId}: OfferListProps): JSX.Element {

  return (
    <div className={`places__list ${className}`}>
      {offers.map((offer) => <ApartmentCard key={offer.id} offer={offer} onCardHover={setActiveOfferId} className={OfferCardClassName.Main}/>)}
    </div>
  );
}

export default OfferList;
