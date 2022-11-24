import { SortTypes } from './const';
import { Offer } from './types/offers';


function compare(typeSorting: string) {
  return (a: Offer, b: Offer): number => {
    switch (typeSorting) {
      case SortTypes.PriceAscending:
        return a.price - b.price;
      case SortTypes.PriceDescending:
        return b.price - a.price;
      case SortTypes.RatingDescending:
        return b.rating - a.rating;
      case SortTypes.Popular:
        return 0;
      default:
        return 0;
    }
  };
}

export default compare;
