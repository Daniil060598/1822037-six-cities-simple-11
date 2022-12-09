import { memo } from 'react';

type RoomPriceProps = {
  price: number;
}

function RoomPrice({ price }: RoomPriceProps): JSX.Element {
  return (
    <div className="property__price">
      <b className="property__price-value">&euro;{price}</b>
      <span className="property__price-text">&nbsp;night</span>
    </div>
  );
}

export default memo(RoomPrice);
