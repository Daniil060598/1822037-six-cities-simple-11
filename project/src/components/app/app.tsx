import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../../pages/main-screen/main-screen';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { Reviews } from '../../types/reviews';
import ScrollToTop from '../utils/scroll-to-top';
import { useAppSelector } from '../../hooks';

type AppProps = {
  reviews: Reviews;
}

function App({ reviews }: AppProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const currentOffers = useAppSelector((state) => state.offers).filter((offer) => offer.city.name === currentCity);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main} element={<Main currentOffers={currentOffers} currentCity={currentCity}/>} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Room} element={<Room offers={currentOffers} reviews={reviews} />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
