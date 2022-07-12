import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { PageTitle } from '../page-title/PageTitle';
import { PhonebookForm } from '../phonebook-form/PhonebokForm';
import { SectionTitle } from '../section-title/SectionTitle';
import { Filter } from '../filter/Filter';
import { ContactList } from '../contact-list/ContactList';
import { Container } from './App.styled';
 

export class App extends Component{
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    
    filter: '',
  };
  
  formSubmitHandler = ({ name, number }, { resetForm }) => {
    const { contacts } = this.state;
    const contactNames = contacts.map(contact => contact.name);

    if (contactNames.includes(name)) {
      alert(`${name} is already in contacts`);
    } else if (name !== '' && number !== '') {
      const newContact = { name , number, id: nanoid() };
      this.setState(prevState => (
      { contacts: [...prevState.contacts, newContact] })
    );
    }
    resetForm();
  }
  
  changeFilter = (evt) => {
      this.setState({ filter: evt.target.value });
  }
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
  deleteContact = (evt) => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== evt.target.id) }))
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
    <Container>
      <PageTitle title="Phonebook" />
      <PhonebookForm onSubmit={this.formSubmitHandler} /> 
      <SectionTitle title="Contacts"/>
      <Filter value={filter} onChange={this.changeFilter} />
      <ContactList contacts={visibleContacts} deleteContact={this.deleteContact} />
    </Container>
    )
  }
};
