import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UrlMarker } from '../../const';
import useMap from '../../hooks/useMap';
import { Offers } from '../../types/offers';

type MapProps = {
  offers: Offers;
  activeOfferId?: number;
  className: string;
}

function Map({ offers, activeOfferId, className }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);
  const params = useParams();
  const currentOfferId = Number(params.id);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: UrlMarker.Default,
    iconSize: [27, 39],
    iconAnchor: [27, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: UrlMarker.Current,
    iconSize: [27, 39],
    iconAnchor: [27, 39],
  });

  useEffect(() => {
    if (map) {
      map.setView({
        lat: offers[0].city.location.latitude,
        lng: offers[0].city.location.longitude
      },
      offers[0].city.location.zoom,);
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === activeOfferId || offer.id === currentOfferId)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
    return () => document.querySelector('.leaflet-pane .leaflet-marker-pane')?.replaceChildren();
  }, [map, offers, activeOfferId]);

  return (
    <section className={`${className} map`} ref={mapRef}></section>
  );
}

export default Map;
