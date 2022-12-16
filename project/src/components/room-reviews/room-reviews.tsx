import { memo } from 'react';
import { useAppSelector } from '../../hooks';
import { getReviews } from '../../store/review-data/selectors';
import CommentForm from '../comment-form/comment-form';
import ReviewList from '../review-list/review-list';

function RoomReviews(): JSX.Element {
  const reviews = useAppSelector(getReviews).slice(-10);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewList reviews={reviews} />
      <CommentForm />
    </section>
  );
}

export default memo(RoomReviews);
