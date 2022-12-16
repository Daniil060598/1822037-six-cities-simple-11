import { makeFakeReview } from '../../utils/mocks';
import { fetchReviewsAction, sendReviewAction } from '../api-actions';
import { reviewsData } from './review-data';

const reviews = [makeFakeReview()];

describe('Reducer: offersData', () => {
  it('without additional parameters should return initial state', () => {
    expect(reviewsData.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        reviews: [],
        isReviewDataLoadingStatus: false,
        sendingReviewHasError: false,
      });
  });

  it('should update reviews by load reviews', () => {
    const state = {
      reviews: [],
      isReviewDataLoadingStatus: false,
      sendingReviewHasError: false,
    };
    expect(reviewsData.reducer(state, { type: fetchReviewsAction.fulfilled.type, payload: reviews }))
      .toEqual({
        reviews,
        isReviewDataLoadingStatus: false,
        sendingReviewHasError: false,
      });
  });

  it('should set isReviewDataLoadingStatus flag if review is sent', () => {
    const state = {
      reviews: [],
      isReviewDataLoadingStatus: false,
      sendingReviewHasError: false,
    };
    expect(reviewsData.reducer(state, { type: sendReviewAction.pending.type }))
      .toEqual({
        reviews: [],
        isReviewDataLoadingStatus: true,
        sendingReviewHasError: false,
      });
  });

  it('should update reviews if a new review has been sent', () => {
    const state = {
      reviews: [],
      isReviewDataLoadingStatus: false,
      sendingReviewHasError: false,
    };
    expect(reviewsData.reducer(state, { type: sendReviewAction.fulfilled.type, payload: reviews }))
      .toEqual({
        reviews: reviews,
        isReviewDataLoadingStatus: false,
        sendingReviewHasError: false,
      });
  });

  it('should set sendingReviewHasError flag if server is unavailable', () => {
    const state = {
      reviews: [],
      isReviewDataLoadingStatus: false,
      sendingReviewHasError: false,
    };
    expect(reviewsData.reducer(state, { type: sendReviewAction.rejected.type }))
      .toEqual({
        reviews: [],
        isReviewDataLoadingStatus: false,
        sendingReviewHasError: true,
      });
  });
});
