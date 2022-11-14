import { Reviews } from '../types/reviews';

export const reviews: Reviews = [
  {
    id: 1,
    user: {
      id: 12,
      isPro: true,
      name: 'Isaac',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/3.jpg',
    },
    rating: 4,
    comment: 'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    date: '2022-10-17T13:58:46.499Z',
  },
  {
    id: 2,
    user: {
      id: 10,
      isPro: true,
      name: 'Max',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/1.jpg',
    },
    rating: 5,
    comment: 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    date: '2022-11-17T13:58:46.499Z',
  },
];
