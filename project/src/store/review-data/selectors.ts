import { NameSpace } from '../../const';
import { Reviews } from '../../types/reviews';
import { State } from '../../types/state';

export const getReviews = (state: State): Reviews => state[NameSpace.ReviewsData].reviews;
export const getReviewDataLoadingStatus = (state: State): boolean => state[NameSpace.ReviewsData].isReviewDataLoadingStatus;
export const getSendingReviewErrorStatus = (state: State): boolean => state[NameSpace.ReviewsData].sendingReviewHasError;
