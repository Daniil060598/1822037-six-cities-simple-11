import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offer } from '../../types/offers';
import { OfferData } from '../../types/state';
import { fetchOfferAction } from '../api-actions';

const initialState: OfferData = {
  offer: {} as Offer,
  isOfferDataLoadingStatus: false,
  fetchingOfferHasError: false,
};

export const offerData = createSlice({
  name: NameSpace.OfferData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
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
      });
  }
});
