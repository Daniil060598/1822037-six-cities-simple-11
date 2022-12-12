import { Reviews } from '../../types/reviews';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: Reviews;
}

function ReviewList({ reviews }: ReviewListProps): JSX.Element {
  const sortedReviews = [...reviews].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return (
    <ul className="reviews__list">
      {sortedReviews.map((review) => <ReviewItem key={review.id} review={review} />)}
    </ul>
  );
}

export default ReviewList;
