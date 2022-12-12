import { Review } from '../../types/reviews';
import RatingStars from '../rating-stars/rating-stars';
import Time from '../time/time';

type ReviewProps = {
  review: Review;
}

function ReviewItem ({review}: ReviewProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <RatingStars rating={review.rating} className={'reviews__stars'}/>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <Time className='reviews__time' date={review.date}/>
      </div>
    </li>
  );
}

export default ReviewItem;
