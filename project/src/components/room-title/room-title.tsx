import { memo } from 'react';

type RoomTitleProps = {
  title: string;
}

function RoomTitle({title}: RoomTitleProps) {
  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">
        {title}
      </h1>
    </div>
  );
}

export default memo(RoomTitle);
