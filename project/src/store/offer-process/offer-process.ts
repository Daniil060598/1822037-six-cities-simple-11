import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES, NameSpace, SortTypes } from '../../const';
import { OfferProcess } from '../../types/state';

const initialState: OfferProcess = {
  city: CITIES[0],
  typeSorting: SortTypes.Popular,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    changeTypeSorting: (state, action: PayloadAction<string>) => {
      state.typeSorting = action.payload;
    },
  }
});

export const {changeCity, changeTypeSorting} = offerProcess.actions;
