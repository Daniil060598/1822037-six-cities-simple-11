import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../../pages/main-screen/main-screen';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { Offers } from '../../types/offers';


type AppProps = {
  placesCount: number;
  offers: Offers;
}

function App({ placesCount, offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main placesCount={placesCount} offers={offers}/>} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Room} element={<Room offers={offers} />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
