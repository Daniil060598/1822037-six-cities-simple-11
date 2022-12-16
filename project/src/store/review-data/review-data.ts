import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewsData } from '../../types/state';
import { fetchReviewsAction, sendReviewAction } from '../api-actions';

const initialState: ReviewsData = {
  reviews: [],
  isReviewDataLoadingStatus: false,
  sendingReviewHasError: false,
};

export const reviewsData = createSlice({
  name: NameSpace.ReviewsData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.isReviewDataLoadingStatus = true;
        state.sendingReviewHasError = false;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.isReviewDataLoadingStatus = false;
        state.reviews = action.payload;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.isReviewDataLoadingStatus = false;
        state.sendingReviewHasError = true;
      });
  }
});
