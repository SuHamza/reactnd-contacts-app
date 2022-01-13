import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact';

class App extends Component {
  // Set Contacts Array as State in App
  state = {
    contacts: []
  }
    // Use API to Fetch Remote Contacts
    componentDidMount() {
      ContactsAPI.getAll()
        .then((contacts) => {
          this.setState(() => ({
            contacts
          }))
        })
    }


  // Using setState to Remove Contacts
  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))

    // Remove Contacts from the Backend
    ContactsAPI.remove(contact)
  }
  render() {
    return (
      <div>
        <ListContacts 
          contacts={this.state.contacts} 
          onDeleteContact={this.removeContact}
        />
        <CreateContact />
      </div>
    )
  }
}

export default App;
