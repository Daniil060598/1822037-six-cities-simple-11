export const TIMEOUT_SHOW_ERROR = 2000;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id'
}

export enum UrlMarker {
  Default = '/img/pin.svg',
  Current = '/img/pin-active.svg'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
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

export enum SortTypes {
  Popular = 'popular',
  PriceAscending = 'PriceAscending',
  PriceDescending = 'PriceDescending',
  RatingDescending = 'RatingDescending'
}

export const MONTHS: readonly string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const CITIES: readonly string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}
