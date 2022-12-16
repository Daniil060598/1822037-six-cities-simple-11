import { AuthorizationStatus } from '../const';
import {store} from '../store/index';
import { Offer, Offers } from './offers';
import { Reviews } from './reviews';
import { UserData } from './user-data';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData;
};

export type OfferProcess = {
  city: string;
  typeSorting: string;
}

export type OffersData = {
  offers: Offers;
  isOffersDataLoadingStatus: boolean;
  fetchingOffersHasError: boolean;
}

export type OfferData = {
  offer: Offer;
  isOfferDataLoadingStatus: boolean;
  fetchingOfferHasError: boolean;
}

export type OffersNearbyData = {
  offersNearby: Offers;
}

export type ReviewsData = {
  reviews: Reviews;
  isReviewDataLoadingStatus: boolean;
  sendingReviewHasError: boolean;
}
