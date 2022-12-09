import { memo } from 'react';
import { OfferCardClassName } from '../../const';
import { useAppSelector } from '../../hooks';
import { getTypeSorting } from '../../store/offer-process/selectors';
import { Offers } from '../../types/offers';
import compare from '../../utils';
import ApartmentCard from '../apartment-card/apartment-card';

type OfferListProps = {
  offers: Offers;
  className: string;
  setActiveOfferId: (offerId: number) => void;
}

function OfferList({ offers, className, setActiveOfferId}: OfferListProps): JSX.Element {
  const currentTypeSorting = useAppSelector(getTypeSorting);
  const sortedOffers = [...offers].sort(compare(currentTypeSorting));

  return (
    <div className={`places__list ${className}`}>
      {sortedOffers.map((offer) => <ApartmentCard key={offer.id} offer={offer} onCardHover={setActiveOfferId} className={OfferCardClassName.Main}/>)}
    </div>
  );
}

export default memo(OfferList);
