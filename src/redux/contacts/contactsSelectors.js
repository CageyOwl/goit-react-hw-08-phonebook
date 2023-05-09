const selectContacts = state => state.contacts.items;
const selectContactsAreLoading = state => state.contacts.areLoading;
const selectContactsError = state => state.contacts.error;


export { selectContacts, selectContactsAreLoading, selectContactsError };