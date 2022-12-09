import { memo } from 'react';

type RoomGalleryProps = {
  images: string[];
}


function RoomGallery({ images }: RoomGalleryProps): JSX.Element {

  return (
    <div className="property__gallery">
      {
        images.map((image, index) => (
          <div className="property__image-wrapper" key={`${image} ${String(index)}`}>
            <img className="property__image" src={image} alt="studio" />
          </div>
        ))
      }
    </div>
  );
}

export default memo(RoomGallery);
