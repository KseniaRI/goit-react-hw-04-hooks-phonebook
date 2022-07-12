import { useState } from 'react';
import { nanoid } from 'nanoid';
import { PageTitle } from '../page-title/PageTitle';
import { PhonebookForm } from '../phonebook-form/PhonebokForm';
import { SectionTitle } from '../section-title/SectionTitle';
import { Filter } from '../filter/Filter';
import { ContactList } from '../contact-list/ContactList';
import { Container } from './App.styled';
 

export const App = () => {

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');
  
  const formSubmitHandler = ({ name, number }, { resetForm }) => {

    const contactNames = contacts.map(contact => contact.name);

    if (contactNames.includes(name)) {
      alert(`${name} is already in contacts`);
    } else if (name !== '' && number !== '') {
      const newContact = { name, number, id: nanoid() };
      setContacts([...contacts, newContact]);
    }
    resetForm();
  }
  
  const changeFilter = (evt) => {
      setFilter(evt.target.value);
  }
  const getVisibleContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
  const deleteContact = (evt) => {
    setContacts(contacts.filter(contact => contact.id !== evt.target.id));
  }

    const visibleContacts = getVisibleContacts();
    return (
    <Container>
      <PageTitle title="Phonebook" />
      <PhonebookForm onSubmit={formSubmitHandler} /> 
      <SectionTitle title="Contacts"/>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </Container>
    )
}
