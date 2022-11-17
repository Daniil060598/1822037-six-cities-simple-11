import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../const';
import { offers } from '../mocks/offers';
import { changeCity, changeTypeSorting, getOffersForCity } from './action';

const initialOffers = offers.filter((offer) => offer.city.name === CITIES[0]);

const initialState = {
  city: CITIES[0],
  offers: initialOffers,
  typeSorting: 'popular',
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffersForCity, (state, action) => {
      state.offers = offers.filter((offer) => offer.city.name === action.payload);
    })
    .addCase(changeTypeSorting, (state, action) => {
      state.typeSorting = action.payload;
    });
});

export { reducer };
