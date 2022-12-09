import { memo } from 'react';

type RoomInsideProps = {
  goods: string[];
}

function RoomInside({ goods }: RoomInsideProps): JSX.Element {

  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {
          goods.map((appliance, index) => (
            <li className="property__inside-item" key={`${appliance} ${String(index)}`}>
              {appliance}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default memo(RoomInside);
