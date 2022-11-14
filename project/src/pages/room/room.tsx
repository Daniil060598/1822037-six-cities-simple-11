import { Offers } from '../../types/offers';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import CommentForm from '../../components/comment-form/comment-form';
import Header from '../../components/header/header';
import { Reviews } from '../../types/reviews';
import ReviewList from '../../components/review-list/review-list';
import { offersNearby } from '../../mocks/offers-nearby';
import Map from '../../components/map/map';
import { MapClassName, OfferListClassName } from '../../const';
import OfferList from '../../components/offer-list/offer-list';
import { useState } from 'react';
import RoomRating from '../../components/room-rating/room-rating';

type RoomProps = {
  offers: Offers;
  reviews: Reviews;
}

function Room({ offers, reviews }: RoomProps): JSX.Element {
  const params = useParams();
  const [activeOfferId, setActiveOfferId] = useState(0);
  const [openOfferId,] = useState(0);
  // setOpenOfferId(Number(params.id));
  const room = offers.find((offer) => offer.id.toString() === params.id);
  const offersNearbyCopy = [...offersNearby];
  if (!room) {
    return <NotFoundScreen />;
  }
  offersNearbyCopy.push(room);
  return (
    <div className="page">
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <Header isLogin />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                room.images.map((image, index) => (
                  <div className="property__image-wrapper" key={`${image} ${String(index)}`}>
                    <img className="property__image" src={image} alt="studio" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {room.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {room.title}
                </h1>
              </div>
              <RoomRating rating={room.rating}/>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {room.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${room.bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${room.maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{room.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    room.goods.map((appliance, index) => (
                      <li className="property__inside-item" key={`${appliance} ${String(index)}`}>
                        {appliance}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={room.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {room.host.name}
                  </span>
                  {room.host.isPro ? <span className="property__user-status">Pro</span> : ''}
                </div>
                <div className="property__description">
                  <p className="property__text" dangerouslySetInnerHTML={{ __html: room.description }} />
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList reviews={reviews} />
                <CommentForm />
              </section>
            </div>
          </div>
          <Map offers={offersNearbyCopy} className={MapClassName.Room} activeOfferId={activeOfferId} openOfferId={openOfferId} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList offers={offersNearby} className={OfferListClassName.Room} setActiveOfferId={setActiveOfferId} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
