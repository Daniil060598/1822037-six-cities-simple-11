import { memo } from 'react';

type RoomHostProps = {
  hostName: string;
  avatarUrl: string;
  hostIsPro: boolean;
  description: string;
}

function RoomHost({ hostName, avatarUrl, hostIsPro, description }: RoomHostProps): JSX.Element {
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {hostName}
        </span>
        {hostIsPro ? <span className="property__user-status">Pro</span> : ''}
      </div>
      <div className="property__description">
        <p className="property__text" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}

export default memo(RoomHost);
