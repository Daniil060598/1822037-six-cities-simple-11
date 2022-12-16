import { NameSpace } from '../../const';
import { Offer } from '../../types/offers';
import { State } from '../../types/state';

export const getOffer = (state: State): Offer => state[NameSpace.OfferData].offer;
export const getOfferDataLoadingStatus = (state: State): boolean => state[NameSpace.OfferData].isOfferDataLoadingStatus;
export const getFetchingOfferErrorStatus = (state: State): boolean => state[NameSpace.OfferData].fetchingOfferHasError;
