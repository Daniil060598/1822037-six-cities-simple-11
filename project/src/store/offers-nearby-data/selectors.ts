import { NameSpace } from '../../const';
import { Offers } from '../../types/offers';
import { State } from '../../types/state';

export const getOffersNearby = (state: State): Offers => state[NameSpace.OffersNearbyData].offersNearby;
