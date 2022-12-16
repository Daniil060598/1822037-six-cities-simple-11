import { CITIES, SortTypes } from '../../const';
import { offerProcess, changeCity, changeTypeSorting } from './offer-process';

describe('Reducer: offerProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(offerProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        city: CITIES[0],
        typeSorting: SortTypes.Popular,
      });
  });

  it('should change the city to the given value', () => {
    const state = {
      city: CITIES[0],
      typeSorting: SortTypes.Popular,
    };
    expect(offerProcess.reducer(state, changeCity(CITIES[1])))
      .toEqual({
        city: CITIES[1],
        typeSorting: SortTypes.Popular,
      });
  });

  it('should change the sort type to the given value', () => {
    const state = {
      city: CITIES[0],
      typeSorting: SortTypes.Popular,
    };
    expect(offerProcess.reducer(state, changeTypeSorting(SortTypes.PriceDescending)))
      .toEqual({
        city: CITIES[0],
        typeSorting: SortTypes.PriceDescending,
      });
  });
});
