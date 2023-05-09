import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './contactsList.module.css';


export default function ContactListItem({ id, name, number }) {
  return (
    <li>
      {name}: {number}
      <Link to={`/edit-contact/${id}`} className={css['contact-list__button']}>
        Change
      </Link>
      <button className={css['contact-list__button']} name='delete' id={id}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
