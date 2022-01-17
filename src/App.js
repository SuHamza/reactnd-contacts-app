import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact';
import { Routes, Route } from 'react-router-dom';

// const navigate = useNavigate(); // extract navigation prop here 

class App extends Component {
  // Set Contacts Array as State in App
  state = {
    contacts: []
  }
  // navigate = useNavigate();
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

  // Add New Contact to State
  createContact = (contact) => {
    ContactsAPI.create(contact)
    .then((contact) => {
      this.setState((currentState) => ({
        contacts: currentState.contacts.concat([contact])
      }))
    })
  }

  render() {
    // const { navigation } = this.props;
    console.log(this.props);
    return (
      <div>
        {/* Add Routes to the APP */}
        <Routes>
        {/* Main Route */}
        {/* <Route exact> is gone. Instead, use a trailing `*` */}
        <Route path='/*' element={<ListContacts 
          contacts={this.state.contacts} 
          onDeleteContact={this.removeContact}
          />}>
      </Route>
        {/* Create Contact Route */}
        {/* In V6, you can't use the `component` prop anymore. 
            It was replaced in favor of `element` */}
        <Route path='/create' element={
        <CreateContact 
          onCreateContact={(contact) => {
            this.createContact(contact);
            // navigate('/');
            // history.push('/');
          }}
        />
        }></Route>
        </Routes>
      </div>
    )
  }

}

export default App;
