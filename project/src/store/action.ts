import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<string>('offer/changeCity');

export const getOffersForCity = createAction<string>('offer/getOffersForCity');
