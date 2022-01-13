import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact';

class App extends Component {
  // Set Contacts Array as State in App
  state = {
    contacts: [],
    screen: 'list'
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
        {/* Using state to control content displayed to the user */}
        {this.state.screen === 'list' && (
          <ListContacts 
            contacts={this.state.contacts} 
            onDeleteContact={this.removeContact}
            onNavigate={() => {
              this.setState(() => ({
                screen: 'create'
              }))
           }}
          />
        )}
        {this.state.screen === 'create' && (
          <CreateContact />
        )}
      </div>
    )
  }
}

export default App;
