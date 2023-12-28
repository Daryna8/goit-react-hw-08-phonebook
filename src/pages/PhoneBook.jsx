import s from '../components/PhoneBook.module.css';
import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactThunk,
  deleteContactsThunk,
  fetchContactsThunk,
} from '../redux/phonebook/operations';
import { setFilter } from '../redux/phonebook/phonebookSlice';
import { Paper } from '@mui/material';
import { toast } from 'react-toastify';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectLoading,
} from '../redux/phonebook/selectors';

export const PhoneBook = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = newContact => {
    if (contacts.map(c => c.name).includes(newContact.name)) {
      toast.warn(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addContactThunk(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContactsThunk(id));
  };
  return (
    <div className={s.phonebook}>
      {loading && !error && <b>Request in progress...</b>}
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />

      <Paper elevation={3} className={s.contacts}>
        <h2>Contacts</h2>
        <Filter filter={filter} handleChangeInput={handleChangeFilter} />
        <ContactList
          filteredContacts={filteredContacts}
          handleDeleteContact={handleDeleteContact}
        />
      </Paper>
    </div>
  );
};
