import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import ScrollToTop from '../utils/scroll-to-top';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import LoadingScreen from '../loading-screen/loading-screen';
import { getOffersDataLoadingStatus } from '../../store/app-data/selectors';

function App(): JSX.Element {
  const isOffersDataLoadingStatus = useAppSelector(getOffersDataLoadingStatus);

  if (isOffersDataLoadingStatus) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen/>} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Room} element={<Room />} />
        <Route path={AppRoute.NotFound} element={<NotFoundScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
