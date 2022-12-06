import { useState } from 'react';
import { SortTypes } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeTypeSorting } from '../../store/action';

const sortingList = [
  {
    type: SortTypes.Popular,
    name: 'Popular',
  },
  {
    type: SortTypes.PriceAscending,
    name: 'Price: low to high',
  },
  {
    type: SortTypes.PriceDescending,
    name: 'Price: high to low',
  },
  {
    type: SortTypes.RatingDescending,
    name: 'Top rated first',
  }
];


function OfferSorting(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentTypeSorting = useAppSelector((state) => state.typeSorting);
  const [openSorting, setOpenSorting] = useState(false);
  const currentSortingItem = sortingList.find((item) => currentTypeSorting === item.type);


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpenSorting(!openSorting)}>
        {currentSortingItem?.name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${openSorting ? 'places__options--opened' : ''}`}>
        {
          sortingList.map((item) => (
            <li
              key={item.type}
              className={`places__option ${currentTypeSorting === item.type ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => {
                dispatch(changeTypeSorting(item.type));
                setOpenSorting(false);
              }}
            >
              {item.name}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default OfferSorting;
