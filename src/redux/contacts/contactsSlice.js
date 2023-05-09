import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  updateContact,
  removeContact,
} from './contactsOperations';
import { logOut } from 'redux/auth/authOperations';

const handlePending = state => {
  state.areLoading = true;
};
const handleRejection = (state, action) => {
  state.error = action.payload;
  state.areLoading = false;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    areLoading: false,
    error: null,
  },
  extraReducers: {
    [getContacts.pending]: handlePending,
    [getContacts.rejected]: handleRejection,
    [getContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.error = null;
      state.areLoading = false;
    },

    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejection,
    [addContact.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.error = null;
      state.areLoading = false;
    },

    [updateContact.pending]: handlePending,
    [updateContact.rejected]: handleRejection,
    [updateContact.fulfilled]: (state, action) => {
      state.items[state.items.findIndex(i => i.id === action.payload.id)] =
        action.payload;
      state.error = null;
      state.areLoading = false;
    },

    [removeContact.pending]: handlePending,
    [removeContact.rejected]: handleRejection,
    [removeContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
      state.error = null;
      state.areLoading = false;
    },

    [logOut.fulfilled]: state => {
      state.items = [];
      state.error = null;
      state.areLoading = false;
    },
  },
});
