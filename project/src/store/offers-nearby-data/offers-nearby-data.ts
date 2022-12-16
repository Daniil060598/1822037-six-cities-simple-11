import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersNearbyData } from '../../types/state';
import { fetchOffersNearbyAction } from '../api-actions';

const initialState: OffersNearbyData = {
  offersNearby: [],
};

export const offersNearbyData = createSlice({
  name: NameSpace.OffersData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      });
  }
});
