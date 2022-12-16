import { makeFakeOffer } from '../../utils/mocks';
import { fetchOffersNearbyAction } from '../api-actions';
import { offersNearbyData } from './offers-nearby-data';

const offersNearby = [makeFakeOffer()];

describe('Reducer: offersData', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersNearbyData.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        offersNearby: [],
      });
  });

  it('should update offersNearby by load offersNearby', () => {
    const state = {
      offersNearby: [],
    };
    expect(offersNearbyData.reducer(state, {type: fetchOffersNearbyAction.fulfilled.type, payload: offersNearby}))
      .toEqual({
        offersNearby,
      });
  });
});
