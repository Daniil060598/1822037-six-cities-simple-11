import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { UrlMarker } from '../../const';
import useMap from '../../hooks/useMap';
import { Offers } from '../../types/offers';

type MapProps = {
  offers: Offers;
  activeOfferId: number;
}

function Map({ offers, activeOfferId }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

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
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.lat,
            lng: offer.location.lng,
          }, {
            icon: (offer.id === activeOfferId)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
    return () => document.querySelector('.leaflet-pane .leaflet-marker-pane')?.replaceChildren();
  }, [map, offers, activeOfferId]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
