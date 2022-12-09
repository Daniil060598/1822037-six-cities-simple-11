import { FormEvent, memo, useEffect, useState } from 'react';
import { ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { getReviewDataLoadingStatus, getReviewSendingStatus } from '../../store/app-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

const MAX_COMMENT_LENGTH = 300;
const MIN_COMMENT_LENGTH = 50;

enum ErrorMessage {
  CommentInvalidLength = 'Not less than 50 and not more than 300 characters',
}

const RATING_LIST = [
  {
    value: '5',
    title: 'perfect',
  },
  {
    value: '4',
    title: 'good',
  },
  {
    value: '3',
    title: 'not bad',
  },
  {
    value: '2',
    title: 'badly',
  },
  {
    value: '1',
    title: 'terribly',
  },
];

function CommentForm(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isReviewDataLoadingStatus = useAppSelector(getReviewDataLoadingStatus);
  const reviewSentSuccessfully = useAppSelector(getReviewSendingStatus);

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
    if (reviewSentSuccessfully) {
      setFormData(formDataInitialState);
      setFormState(formInitialState);
    }
  }, [reviewSentSuccessfully]);

  const fieldChangeHandle = (
    evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    if (name === 'comment') {
      if (value.trim().length >= MIN_COMMENT_LENGTH && value.trim().length <= MAX_COMMENT_LENGTH) {
        setFormState({ ...formState, commentIsEmpty: false, errorMessage: '' });
      } else {
        setFormState({
          ...formState,
          commentIsEmpty: true,
          errorMessage: ErrorMessage.CommentInvalidLength,
        });
      }
    }
    if (name === 'rating') {
      if (value.length > 0) {
        setFormState({ ...formState, ratingIsEmpty: false });
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendReviewAction(formData));
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        {authorizationStatus === AuthorizationStatus.Auth
          ? 'Your review'
          : 'To post a comment please log in'}
      </label>
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <>
          <div className="reviews__rating-form form__rating">
            {RATING_LIST.map((ratingItem) => (
              // <div key={ratingItem.value}>
              <>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={ratingItem.value}
                  id={`${ratingItem.value}-stars`}
                  type="radio"
                  onChange={fieldChangeHandle}
                  checked={Number(ratingItem.value) === Number(formData.rating)}
                />
                <label
                  htmlFor={`${ratingItem.value}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title={ratingItem.title}
                >
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </>
              // </div>
            ))}
          </div>
          <textarea
            className="reviews__textarea form__textarea"
            id="review"
            name="comment"
            placeholder="Tell how was your stay, what you like and what can be improved"
            onChange={fieldChangeHandle}
            value={formData.comment}
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
              disabled={formState.ratingIsEmpty || formState.commentIsEmpty || isReviewDataLoadingStatus}
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
