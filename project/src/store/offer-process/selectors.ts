import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getCity = (state: State): string => state[NameSpace.Offer].city;
export const getTypeSorting = (state: State): string => state[NameSpace.Offer].typeSorting;
