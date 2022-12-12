export const CITIES: readonly string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
  NotFound = '/404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offer = '/hotels',
  Comment = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
  Offer = 'OFFER',
}

export enum SortTypes {
  Popular = 'Popular',
  PriceAscending = 'PriceAscending',
  PriceDescending = 'PriceDescending',
  RatingDescending = 'RatingDescending'
}

export enum MapClassName {
  Main = 'cities__map',
  Room = 'property__map'
}

export enum OfferCardClassName {
  Main = 'cities__card',
  Room = 'near-places__card'
}

export enum OfferListClassName {
  Main = 'cities__places-list tabs__content',
  Room = 'near-places__list'
}
