import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';

import css from './contactEdit.module.css';


export default function ContactEdit() {
  const { contactId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector(selectContacts);
  const [contact, setContact] = useState(
    () => contacts[contacts.findIndex(c => c.id === contactId)]
  );

  const onChange = event => {
    setContact(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(updateContact(contact));
    navigate("/contacts");
  };

  return (
    <div className={css.overlay} onClick={null}>
      <div className={css.modal}>
        <form>
          <label htmlFor="name">Name</label>
          <input
            className={css['adding-form__input']}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={contact.name}
            onChange={onChange}
          />

          <label htmlFor="number">Phone</label>
          <input
            className={css['adding-form__input']}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={contact.number}
            onChange={onChange}
          />

          <ul>
            <button type="submit" onClick={onSubmit}>
              Change
            </button>
            <Link to="/contacts">Close</Link>
          </ul>
        </form>
      </div>
    </div>
  );
}
