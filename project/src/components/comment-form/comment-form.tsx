import { FormEvent, memo, useEffect, useState } from 'react';
import { ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import {

} from '../../store/offers-data/selectors';
import { getReviewDataLoadingStatus, getSendingReviewErrorStatus } from '../../store/review-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

enum CommentLength {
  Max = 300,
  Min = 50
}

enum ErrorMessage {
  CommentInvalidLength = 'Not less than 50 and not more than 300 characters',
  SendingError = 'Failed to send. Please try again.',
}

enum InputName {
  Comment = 'comment',
  Rating = 'rating'
}

enum RatingValue {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5
}

function CommentForm(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isReviewDataLoadingStatus = useAppSelector(getReviewDataLoadingStatus);
  const sendingReviewHasError = useAppSelector(getSendingReviewErrorStatus);

  const formDataInitialState = {
    hotelId: params.id || '',
    rating: Number(),
    comment: '',
  };

  const formInitialState = {
    ratingIsEmpty: true,
    commentIsEmpty: true,
    errorMessage: '',
  };

  const [formData, setFormData] = useState(formDataInitialState);
  const [formState, setFormState] = useState(formInitialState);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && sendingReviewHasError) {
      setFormState({
        ...formState,
        errorMessage: ErrorMessage.SendingError,
      });
    } else if (!sendingReviewHasError && !isReviewDataLoadingStatus) {
      setFormData(formDataInitialState);
      setFormState(formInitialState);
    }

    return () => {
      isMounted = false;
    };
  }, [sendingReviewHasError, isReviewDataLoadingStatus]);

  const handleInputChange = (
    evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    if (name === InputName.Comment) {
      if (
        value.trim().length >= CommentLength.Min &&
        value.trim().length <= CommentLength.Max
      ) {
        setFormState({ ...formState, commentIsEmpty: false, errorMessage: '' });
      } else {
        setFormState({
          ...formState,
          commentIsEmpty: true,
          errorMessage: ErrorMessage.CommentInvalidLength,
        });
      }
    }
    if (name === InputName.Rating) {
      if (value.length > 0) {
        setFormState({ ...formState, ratingIsEmpty: false });
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendReviewAction(formData));
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        {authorizationStatus === AuthorizationStatus.Auth
          ? 'Your review'
          : 'To post a comment please log in'}
      </label>
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <>
          <div className="reviews__rating-form form__rating">
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value="5"
              id="5-stars"
              type="radio"
              onChange={handleInputChange}
              checked={RatingValue.Five === Number(formData.rating)}
              disabled={isReviewDataLoadingStatus}
            />
            <label
              htmlFor="5-stars"
              className="reviews__rating-label form__rating-label"
              title="perfect"
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value="4"
              id="4-stars"
              type="radio"
              onChange={handleInputChange}
              checked={RatingValue.Four === Number(formData.rating)}
              disabled={isReviewDataLoadingStatus}
            />
            <label
              htmlFor="4-stars"
              className="reviews__rating-label form__rating-label"
              title="good"
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value="3"
              id="3-stars"
              type="radio"
              onChange={handleInputChange}
              checked={RatingValue.Three === Number(formData.rating)}
              disabled={isReviewDataLoadingStatus}
            />
            <label
              htmlFor="3-stars"
              className="reviews__rating-label form__rating-label"
              title="not bad"
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value="2"
              id="2-stars"
              type="radio"
              onChange={handleInputChange}
              checked={RatingValue.Two === Number(formData.rating)}
              disabled={isReviewDataLoadingStatus}
            />
            <label
              htmlFor="2-stars"
              className="reviews__rating-label form__rating-label"
              title="badly"
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value="1"
              id="1-star"
              type="radio"
              onChange={handleInputChange}
              checked={RatingValue.One === Number(formData.rating)}
              disabled={isReviewDataLoadingStatus}
            />
            <label
              htmlFor="1-star"
              className="reviews__rating-label form__rating-label"
              title="terribly"
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>
          <textarea
            className="reviews__textarea form__textarea"
            id="review"
            name="comment"
            placeholder="Tell how was your stay, what you like and what can be improved"
            onChange={handleInputChange}
            value={formData.comment}
            disabled={isReviewDataLoadingStatus}
          >
          </textarea>
          <p style={{ color: 'red', fontSize: '12px', margin: '0' }}>
            {formState.errorMessage}
          </p>
          <div className="reviews__button-wrapper">
            <p className="reviews__help">
              To submit review please make sure to set{' '}
              <span className="reviews__star">rating</span> and describe your
              stay with at least{' '}
              <b className="reviews__text-amount">50 characters</b>.
            </p>
            <button
              className="reviews__submit form__submit button"
              type="submit"
              disabled={
                formState.ratingIsEmpty ||
                formState.commentIsEmpty ||
                isReviewDataLoadingStatus
              }
            >
              {isReviewDataLoadingStatus ? 'Loading...' : 'Submit'}
            </button>
          </div>
        </>
      ) : (
        ''
      )}
    </form>
  );
}

export default memo(CommentForm);
