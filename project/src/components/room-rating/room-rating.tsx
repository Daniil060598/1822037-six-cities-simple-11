import { memo } from 'react';
import RatingStars from '../rating-stars/rating-stars';

type RatingProps = {
  rating: number;
}

function RoomRating({ rating }: RatingProps): JSX.Element {
  return (
    <div className="property__rating rating">
      <RatingStars rating={rating} className={'property__stars'}/>
      <span className="property__rating-value rating__value">{rating}</span>
    </div>
  );
}

export default memo(RoomRating);

