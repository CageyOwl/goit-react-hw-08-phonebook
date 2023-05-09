import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getRandomHexColor from 'services/getRandomHexColor';

import css from './contactsList.module.css';

export default function ContactListItem({ id, name, number }) {
  return (
    <li
      className={css['contact-container']}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <div className={css['contact-data']}>
        <div className={css['contact-name']}>{name}</div>
        <a
          className={css['contact-phone']}
          href={`tel:${number}`}
          style={{ color: getRandomHexColor() }}
        >
          {number}
        </a>
      </div>

      <div className={css['contact-actions']}>
        <Link
          to={`/edit-contact/${id}`}
          className={css['contact-actions__button']}
        >
          Change
        </Link>
        <button className={css['contact-actions__button']} name="delete" id={id}>
          Delete
        </button>
      </div>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
