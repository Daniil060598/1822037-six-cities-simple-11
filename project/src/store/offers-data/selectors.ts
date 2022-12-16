import { NameSpace } from '../../const';
import { Offers } from '../../types/offers';
import { State } from '../../types/state';

export const getOffers = (state: State): Offers => state[NameSpace.OffersData].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.OffersData].isOffersDataLoadingStatus;
export const getFetchingOffersErrorStatus = (state: State): boolean => state[NameSpace.OffersData].fetchingOffersHasError;
