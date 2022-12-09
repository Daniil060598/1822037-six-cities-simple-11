import { memo } from 'react';

type RoomFeaturesProps = {
  typeRoom: string;
  qtyBedrooms: number;
  maxAdults: number;
}

function RoomFeatures({ typeRoom, qtyBedrooms, maxAdults }: RoomFeaturesProps): JSX.Element {

  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {typeRoom}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {`${qtyBedrooms} Bedrooms`}
      </li>
      <li className="property__feature property__feature--adults">
        {`Max ${maxAdults} adults`}
      </li>
    </ul>
  );
}

export default memo(RoomFeatures);
