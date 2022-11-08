import { Offers } from '../types/offers';

export const offers: Offers = [
  {
    id: 1,
    title: 'Beautiful & luxurious apartment at great location',
    price: 80,
    type: 'apartment',
    image: 'img/apartment-01.jpg',
    isPremium: true,
    rating: 4,
    photos: [
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-02.jpg'
    ],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. <br><br> A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    qtyBedrooms: 2,
    maxAdults: 4,
    householdAppliances: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    host: {
      name: 'Angelina',
      avatar: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    location: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
      zoom: 16,
    },
    city: {
      location: {
        lat: 52.3740300,
        ing: 4.8896900,
        zoom: 10,
      },
      name: 'Amsterdam',
    }
  },
  {
    id: 2,
    title: 'Wood and stone place',
    price: 120,
    type: 'private room',
    image: 'img/apartment-02.jpg',
    isPremium: false,
    rating: 5,
    photos: [
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg'
    ],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    qtyBedrooms: 2,
    maxAdults: 3,
    householdAppliances: [
      'Wi-Fi',
      'Washing machine',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    host: {
      name: 'Angelina',
      avatar: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    location: {
      lat: 52.3609553943508,
      lng: 4.85309666406198,
      zoom: 16,
    },
    city: {
      location: {
        lat: 52.3740300,
        ing: 4.8896900,
        zoom: 10,
      },
      name: 'Amsterdam',
    }
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    price: 132,
    type: 'apartment',
    image: 'img/apartment-03.jpg',
    isPremium: false,
    rating: 4,
    photos: [
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/studio-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
    ],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    qtyBedrooms: 2,
    maxAdults: 4,
    householdAppliances: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    host: {
      name: 'Max',
      avatar: 'img/avatar-max.jpg',
      isPro: false,
    },
    location: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
      zoom: 16,
    },
    city: {
      location: {
        lat: 52.3740300,
        ing: 4.8896900,
        zoom: 10,
      },
      name: 'Amsterdam',
    }
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    price: 140,
    type: 'apartment',
    image: 'img/apartment-02.jpg',
    isPremium: true,
    rating: 3,
    photos: [
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-02.jpg'
    ],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    qtyBedrooms: 3,
    maxAdults: 5,
    householdAppliances: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
    ],
    host: {
      name: 'Anna',
      avatar: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    location: {
      lat: 52.3809553943508,
      lng: 4.939309666406198,
      zoom: 16,
    },
    city: {
      location: {
        lat: 52.3740300,
        ing: 4.8896900,
        zoom: 10,
      },
      name: 'Amsterdam',
    }
  }
];
