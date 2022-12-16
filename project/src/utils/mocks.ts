import { address, datatype, lorem, internet, image, commerce, date } from 'faker';
import { Offer } from '../types/offers';
import { Review } from '../types/reviews';
import { UserData } from '../types/user-data';

export const makeFakeUser = (): UserData => ({
  avatarUrl: internet.avatar(),
  email: internet.email(),
  id: datatype.number(),
  isPro: datatype.boolean(),
  name: internet.userName(),
  token: datatype.string()
});

export const makeFakeOffer = (): Offer => ({
  bedrooms: datatype.number(),
  city: {
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      zoom: datatype.number(20),
    },
    name: address.cityName(),
  },
  description: lorem.text(),
  goods: lorem.words().split(', '),
  host: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: internet.userName(),
  },
  id: datatype.number(),
  images: [image.abstract()],
  isPremium: datatype.boolean(),
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: datatype.number(20),
  },
  maxAdults: datatype.number(10),
  previewImage: image.abstract(),
  price: Number(commerce.price(500, 2000)),
  rating: datatype.number(5),
  title: lorem.word(),
  type: lorem.word(),
});

export const makeFakeReview = (): Review => ({
  comment: lorem.words(),
  date: String(date.soon()),
  id: datatype.number(),
  rating: datatype.number(5),
  user: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: internet.userName(),
  },
});
