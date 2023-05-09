import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, removeContact } from 'redux/contacts/contactsOperations';

import {
  selectContacts,
  selectContactsAreLoading,
  selectContactsError,
} from 'redux/contacts/contactsSelectors';
import { selectFilter } from 'redux/filter/filterSelectors';

import ContactListItem from './ContactListItem';
import Loader from 'components/Loader/Loader';


export default function ContactList() {
  const dispatch = useDispatch();

  let areContactsLoading = useSelector(selectContactsAreLoading);
  let error = useSelector(selectContactsError);
  let contacts = useSelector(selectContacts);
  let filter = useSelector(selectFilter);

  let list = filter
    ? contacts.filter(contact => contact.name.match(new RegExp(filter, 'gi')))
    : contacts;

  const deleteContact = event => {
    if (event.target.name === 'delete') {
      dispatch(removeContact(event.target.id));
    }
  };

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {areContactsLoading && !error ? (
        <Loader />
      ) : (
        <ul onClick={deleteContact}>
          {list.map(item => (
            <ContactListItem
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.number}
            />
          ))}
        </ul>
      )}
      {error && `Error: ${error}`}
    </>
  );
}
