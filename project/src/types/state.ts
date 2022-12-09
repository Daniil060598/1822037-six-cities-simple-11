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

export type AppData = {
  offers: Offers;
  offer: Offer;
  offersNearby: Offers;
  reviews: Reviews;
  isOffersDataLoadingStatus: boolean;
  isOfferDataLoadingStatus: boolean;
  isReviewDataLoadingStatus: boolean;
  reviewSentSuccessfully: boolean;
}

export type OfferProcess = {
  city: string;
  typeSorting: string;
}
