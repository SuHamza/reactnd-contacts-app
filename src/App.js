import React, { Component } from 'react';
import ListContacts from './ListContacts';

class App extends Component {
  // Set Contacts Array as State in App
  state = {
    contacts: [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
     ]
  }
  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;
