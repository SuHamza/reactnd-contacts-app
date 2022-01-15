import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact';
import { Routes, Route } from 'react-router-dom';

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
        {/* Add Routes to the APP */}
        <Routes>
        {/* Main Route */}
        {/* <Route exact> is gone. Instead, use a trailing `*` */}
        <Route exact path='/*' element={<ListContacts 
          contacts={this.state.contacts} 
          onDeleteContact={this.removeContact}
          onNavigate={() => {
            this.setState(() => ({
              screen: 'create'
            }))
          }}
        />}>
      </Route>
        {/* Create Contact Route */}
        {/* In V6, you can't use the `component` prop anymore. 
            It was replaced in favor of `element` */}
        <Route path='/create' element={<CreateContact />}></Route>
        </Routes>
      </div>
    )
  }

}

export default App;
