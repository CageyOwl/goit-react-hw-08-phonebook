import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';


export default function Phonebook() {
  return(
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
