import { OfferCardClassName, SortTypes } from '../../const';
import { useAppSelector } from '../../hooks';
import { Offers } from '../../types/offers';
import ApartmentCard from '../apartment-card/apartment-card';

type OfferListProps = {
  offers: Offers;
  className: string;
  setActiveOfferId: (offerId: number) => void;
}

function OfferList({ offers, className, setActiveOfferId}: OfferListProps): JSX.Element {
  const typeSorting = useAppSelector((state) => state.typeSorting);
  let sortedOffers: Offers = [];

  switch (typeSorting) {
    case SortTypes.PriceAscending:
      sortedOffers = [...offers].sort((a, b) => a.price - b.price);
      break;
    case SortTypes.PriceDescending:
      sortedOffers = [...offers].sort((a, b) => a.price - b.price).reverse();
      break;
    case SortTypes.RatingDescending:
      sortedOffers = [...offers].sort((a, b) => a.rating - b.rating).reverse();
      break;
    case SortTypes.Popular:
      sortedOffers = offers;
      break;
    default:
      break;
  }

  return (
    <div className={`places__list ${className}`}>
      {sortedOffers.map((offer) => <ApartmentCard key={offer.id} offer={offer} onCardHover={setActiveOfferId} className={OfferCardClassName.Main}/>)}
    </div>
  );
}

export default OfferList;
