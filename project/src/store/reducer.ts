import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES, SortTypes } from '../const';
import { Offer, Offers } from '../types/offers';
import { Reviews } from '../types/reviews';
import { UserData } from '../types/user-data';
import { changeCity, changeTypeSorting, loadOffer, loadOffers, loadOffersNearby, loadReviews, requireAuthorization, setOfferDataLoadingStatus, setOffersDataLoadingStatus, setUser } from './action';

type InitialState = {
  user: UserData;
  city: string;
  offers: Offers;
  offer: Offer;
  offersNearby: Offers;
  reviews: Reviews;
  typeSorting: string;
  authorizationStatus: string;
  isOffersDataLoadingStatus: boolean;
  isOfferDataLoadingStatus: boolean;
}

const initialState: InitialState = {
  user: {} as UserData,
  city: CITIES[0],
  offers: [],
  offer: {} as Offer,
  offersNearby: [],
  reviews: [],
  typeSorting: SortTypes.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoadingStatus: false,
  isOfferDataLoadingStatus: false,
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
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoadingStatus = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoadingStatus = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
