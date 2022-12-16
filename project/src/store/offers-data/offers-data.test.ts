import { makeFakeOffer } from '../../utils/mocks';
import { fetchOffersAction } from '../api-actions';
import { offersData } from './offers-data';

const offers = [makeFakeOffer()];

describe('Reducer: offersData', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersData.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        offers: [],
        isOffersDataLoadingStatus: false,
        fetchingOffersHasError: false,
      });
  });

  it('should set isOffersDataLoadingStatus flag if loading in progress', () => {
    const state = {
      offers: [],
      isOffersDataLoadingStatus: false,
      fetchingOffersHasError: false,
    };
    expect(offersData.reducer(state, { type: fetchOffersAction.pending.type }))
      .toEqual({
        offers: [],
        isOffersDataLoadingStatus: true,
        fetchingOffersHasError: false,
      });
  });

  it('should update offers by load offers', () => {
    const state = {
      offers: [],
      isOffersDataLoadingStatus: false,
      fetchingOffersHasError: false,
    };
    expect(offersData.reducer(state, { type: fetchOffersAction.fulfilled.type, payload: offers }))
      .toEqual({
        offers,
        isOffersDataLoadingStatus: false,
        fetchingOffersHasError: false,
      });
  });

  it('should set fetchingOffersHasError flag if server is unavailable', () => {
    const state = {
      offers: [],
      isOffersDataLoadingStatus: false,
      fetchingOffersHasError: false,
    };
    expect(offersData.reducer(state, { type: fetchOffersAction.rejected.type }))
      .toEqual({
        offers: [],
        isOffersDataLoadingStatus: false,
        fetchingOffersHasError: true,
      });
  });

});
