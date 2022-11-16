import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../../pages/main-screen/main-screen';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import ScrollToTop from '../utils/scroll-to-top';


type AppProps = {
  offers: Offers;
  reviews: Reviews;
}

function App({ offers, reviews }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main} element={<Main offers={offers} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Room} element={<Room offers={offers} reviews={reviews} />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
