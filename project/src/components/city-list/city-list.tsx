import { memo, SyntheticEvent } from 'react';
import { CITIES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/offer-process/offer-process';
import { getCity } from '../../store/offer-process/selectors';

function CityList(): JSX.Element {
  const currentCity = useAppSelector(getCity);
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {
        CITIES.map((city) => (
          <li className="locations__item"
            key={city}
            onClick={(evt: SyntheticEvent) => {
              evt.preventDefault();
              dispatch(changeCity(city));
            }}
          >
            <a className={`locations__item-link tabs__item ${currentCity === city ? 'tabs__item--active' : ''}`} href='/'>
              <span>{city}</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default memo(CityList);
