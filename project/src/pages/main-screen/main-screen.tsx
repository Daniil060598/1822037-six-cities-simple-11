import { memo, useState } from 'react';
import CityList from '../../components/city-list/city-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import OfferListEmpty from '../../components/offer-list-empty/offer-list-empty';
import OfferList from '../../components/offer-list/offer-list';
import OfferSorting from '../../components/offer-sorting/offer-sorting';
import { MapClassName, OfferListClassName } from '../../const';
import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/app-data/selectors';
import { getCity } from '../../store/offer-process/selectors';

function Main(): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState(0);
  const currentCity = useAppSelector(getCity);
  const currentOffers = useAppSelector(getOffers).filter((offer) => offer.city.name === currentCity);

  return (
    <div className="page page--gray page--main">
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>
      <Header />
      <main className={`page__main page__main--index ${currentOffers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList />
          </section>
        </div>
        <div className="cities">
          {currentOffers.length !== 0 ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
                <OfferSorting />
                <OfferList offers={currentOffers} className={OfferListClassName.Main} setActiveOfferId={setActiveOfferId} />
              </section>
              <div className="cities__right-section">
                <Map offers={currentOffers} activeOfferId={activeOfferId} className={MapClassName.Main} />
              </div>
            </div>
            : <OfferListEmpty currentCity={currentCity} />}
        </div>
      </main>
    </div>
  );
}

export default memo(Main);
