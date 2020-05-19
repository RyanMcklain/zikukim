import React, { Component } from 'react';
import * as Contacts from 'expo-contacts';

class ContactsPage extends React {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    console.log({ status });
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Emails],
      });

      if (data.length > 0) {
        const contact = data[0];
        setContact(contact);
      }
    }
  };

  renderContacts = () => {

  };
}
