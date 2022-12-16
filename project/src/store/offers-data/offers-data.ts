import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersData } from '../../types/state';
import { fetchOffersAction } from '../api-actions';

const initialState: OffersData = {
  offers: [],
  isOffersDataLoadingStatus: false,
  fetchingOffersHasError: false,
};

export const offersData = createSlice({
  name: NameSpace.OffersData,
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
      });
  }
});
