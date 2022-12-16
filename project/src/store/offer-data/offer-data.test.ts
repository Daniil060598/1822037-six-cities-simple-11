import { Offer } from '../../types/offers';
import { makeFakeOffer } from '../../utils/mocks';
import { fetchOfferAction } from '../api-actions';
import { offerData } from './offer-data';

const offer = makeFakeOffer();

describe('Reducer: offerData', () => {
  it('without additional parameters should return initial state', () => {
    expect(offerData.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        offer: {} as Offer,
        isOfferDataLoadingStatus: false,
        fetchingOfferHasError: false,
      });
  });

  it('should set isOfferDataLoadingStatus flag if loading in progress', () => {
    const state = {
      offer: {} as Offer,
      isOfferDataLoadingStatus: false,
      fetchingOfferHasError: false,
    };
    expect(offerData.reducer(state, { type: fetchOfferAction.pending.type }))
      .toEqual({
        offer: {} as Offer,
        isOfferDataLoadingStatus: true,
        fetchingOfferHasError: false,
      });
  });

  it('should update offer by load offer', () => {
    const state = {
      offer: {} as Offer,
      isOfferDataLoadingStatus: false,
      fetchingOfferHasError: false,
    };
    expect(offerData.reducer(state, { type: fetchOfferAction.fulfilled.type, payload: offer }))
      .toEqual({
        offer,
        isOfferDataLoadingStatus: false,
        fetchingOfferHasError: false,
      });
  });

  it('should set fetchingOfferHasError flag if server is unavailable', () => {
    const state = {
      offer: {} as Offer,
      isOfferDataLoadingStatus: false,
      fetchingOfferHasError: false,
    };
    expect(offerData.reducer(state, { type: fetchOfferAction.rejected.type }))
      .toEqual({
        offer: {} as Offer,
        isOfferDataLoadingStatus: false,
        fetchingOfferHasError: true,
      });
  });

});
