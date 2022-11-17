import { SyntheticEvent } from 'react';
import { CITIES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity, getOffersForCity } from '../../store/action';

function CityList(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
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
              dispatch(getOffersForCity(city));
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

export default CityList;
