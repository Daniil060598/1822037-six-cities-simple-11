import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES, SortTypes } from '../const';
import { Offers } from '../types/offers';
import { changeCity, changeTypeSorting, loadOffers, requireAuthorization, setOffersDataLoadingStatus } from './action';

type InitialState = {
  city: string;
  offers: Offers;
  typeSorting: string;
  authorizationStatus: string;
  isOffersDataLoadingStatus: boolean;
}

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  typeSorting: SortTypes.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoadingStatus: false,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeTypeSorting, (state, action) => {
      state.typeSorting = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoadingStatus = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
