import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { MapClassName } from '../../const';
import { memo, useEffect, useState } from 'react';
import RoomRating from '../../components/room-rating/room-rating';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOfferAction, fetchOffersNearbyAction, fetchReviewsAction } from '../../store/api-actions';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import RoomReviews from '../../components/room-reviews/room-reviews';
import RoomOffersNearby from '../../components/room-offers-nearby/room-offers-nearby';
import RoomGallery from '../../components/room-gallery/room-gallery';
import RoomTitle from '../../components/room-title/room-title';
import RoomFeatures from '../../components/room-features/room-features';
import RoomPrice from '../../components/room-price/room-price';
import RoomInside from '../../components/room-inside/room-inside';
import RoomHost from '../../components/room-host/room-host';
import { getFetchingOfferErrorStatus, getOffer, getOfferDataLoadingStatus, getOffersNearby } from '../../store/app-data/selectors';

function Room(): JSX.Element {
  const params = useParams();
  const [, setActiveOfferId] = useState(0);
  const dispatch = useAppDispatch();

  const room = useAppSelector(getOffer);
  const offersNearby = useAppSelector(getOffersNearby);
  const isOfferDataLoadingStatus = useAppSelector(getOfferDataLoadingStatus);
  const fetchingOfferHasError = useAppSelector(getFetchingOfferErrorStatus);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && params.id) {
      dispatch(fetchOfferAction(params.id));
      dispatch(fetchOffersNearbyAction(params.id));
      dispatch(fetchReviewsAction(params.id));
    }

    return () => {
      isMounted = false;
    };
  }, [params, dispatch]);

  const offersNearbyAndCurrentOffer = [...offersNearby];
  offersNearbyAndCurrentOffer.push(room);

  if (isOfferDataLoadingStatus) {
    return <LoadingScreen />;
  }

  if (!Object.keys(room).length || fetchingOfferHasError) {
    return <NotFoundScreen />;
  }

  return (
    <div className="page">
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <RoomGallery images={room.images} />
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                room.isPremium ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div> : ''
              }
              <RoomTitle title={room.title} />
              <RoomRating rating={room.rating} />
              <RoomFeatures typeRoom={room.type} qtyBedrooms={room.bedrooms} maxAdults={room.maxAdults} />
              <RoomPrice price={room.price} />
              <RoomInside goods={room.goods}/>
              <RoomHost hostName={room.host.name} avatarUrl={room.host.avatarUrl} hostIsPro={room.host.isPro} description={room.description} />
              <RoomReviews />
            </div>
          </div>
          <Map offers={offersNearbyAndCurrentOffer} className={MapClassName.Room}/>
        </section>
        <div className="container">
          <RoomOffersNearby offersNearby={offersNearby} onCardHover={setActiveOfferId} />
        </div>
      </main>
    </div>
  );
}

export default memo(Room);
