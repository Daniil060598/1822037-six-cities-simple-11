import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Offer, Offers } from '../types/offers';
import { Reviews } from '../types/reviews';
import { UserData } from '../types/user-data';

export const changeCity = createAction<string>('offer/changeCity');

export const changeTypeSorting = createAction<string>('offer/changeTypeSorting');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const loadOffer = createAction<Offer>('data/loadOffer');

export const loadOffersNearby = createAction<Offers>('data/loadOffersNearby');

export const loadReviews = createAction<Reviews>('data/loadReviews');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferDataLoadingStatus');

export const setUser = createAction<UserData>('user/setUser');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
