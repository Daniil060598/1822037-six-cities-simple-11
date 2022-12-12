import { memo } from 'react';

enum MinQty {
  Bedroom = 1,
  Adult = 1
}

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
        {`${qtyBedrooms} ${qtyBedrooms > MinQty.Bedroom ? 'Bedrooms' : 'Bedroom'}`}
      </li>
      <li className="property__feature property__feature--adults">
        {`Max ${maxAdults} ${maxAdults > MinQty.Adult ? 'adults' : 'adult'}`}
      </li>
    </ul>
  );
}

export default memo(RoomFeatures);
