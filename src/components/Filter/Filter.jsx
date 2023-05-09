import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';
import css from './filter.module.css';


export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(changeFilter(event.target.value.trim()));
  };

  return (
    <div className={css['filter-container']}>
      <label className={css['filter__label']} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css['filter__input']}
        type="text"
        name="filter"
        onChange={handleChange}
      />
    </div>
  );
}
