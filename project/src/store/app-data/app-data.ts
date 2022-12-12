import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offer } from '../../types/offers';
import { AppData } from '../../types/state';
import { fetchOfferAction, fetchOffersAction, fetchOffersNearbyAction, fetchReviewsAction, sendReviewAction } from '../api-actions';

const initialState: AppData = {
  offers: [],
  offer: {} as Offer,
  offersNearby: [],
  reviews: [],
  isOffersDataLoadingStatus: false,
  isOfferDataLoadingStatus: false,
  isReviewDataLoadingStatus: false,
  fetchingOffersHasError: false,
  fetchingOfferHasError: false,
  sendingReviewHasError: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoadingStatus = true;
        state.fetchingOffersHasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoadingStatus = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoadingStatus = false;
        state.fetchingOffersHasError = true;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferDataLoadingStatus = true;
        state.fetchingOfferHasError = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferDataLoadingStatus = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOfferDataLoadingStatus = false;
        state.fetchingOfferHasError = true;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
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
