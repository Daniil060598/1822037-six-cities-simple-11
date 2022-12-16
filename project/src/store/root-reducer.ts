import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offerProcess } from './offer-process/offer-process';
import { userProcess } from './user-process/user-process';
import { offerData } from './offer-data/offer-data';
import { offersData } from './offers-data/offers-data';
import { offersNearbyData } from './offers-nearby-data/offers-nearby-data';
import { reviewsData } from './review-data/review-data';

export const rootReducer = combineReducers({
  [NameSpace.OffersData]: offersData.reducer,
  [NameSpace.OfferData]: offerData.reducer,
  [NameSpace.OffersNearbyData]: offersNearbyData.reducer,
  [NameSpace.ReviewsData]: reviewsData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
});
