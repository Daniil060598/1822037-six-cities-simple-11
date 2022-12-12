import leaflet, { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useMap from '../../hooks/useMap';
import { Offers } from '../../types/offers';

export enum UrlMarker {
  Default = '/img/pin.svg',
  Current = '/img/pin-active.svg'
}

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
    const markers: Marker[] = [];
    let isMounted = true;

    if (isMounted && map) {
      map.setView({
        lat: offers[0].city.location.latitude,
        lng: offers[0].city.location.longitude
      },
      offers[0].city.location.zoom);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker.setIcon(
          (offer.id === activeOfferId || offer.id === currentOfferId)
            ? currentCustomIcon
            : defaultCustomIcon,
        )
          .addTo(map);
        markers.push(marker);
      });
      return () => {
        markers.forEach((marker) => marker.removeFrom(map));
        isMounted = false;
      };
    }
  }, [map, offers, activeOfferId]);

  return (
    <section className={`${className} map`} ref={mapRef}></section>
  );
}

export default Map;
