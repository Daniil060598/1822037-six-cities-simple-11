import { NameSpace } from '../../const';
import { Offer, Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import { State } from '../../types/state';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getOffer = (state: State): Offer => state[NameSpace.Data].offer;
export const getOffersNearby = (state: State): Offers => state[NameSpace.Data].offersNearby;
export const getReviews = (state: State): Reviews => state[NameSpace.Data].reviews;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoadingStatus;
export const getOfferDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOfferDataLoadingStatus;
export const getReviewDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isReviewDataLoadingStatus;
export const getFetchingOffersErrorStatus = (state: State): boolean => state[NameSpace.Data].fetchingOffersHasError;
export const getFetchingOfferErrorStatus = (state: State): boolean => state[NameSpace.Data].fetchingOfferHasError;
export const getSendingReviewErrorStatus = (state: State): boolean => state[NameSpace.Data].sendingReviewHasError;
