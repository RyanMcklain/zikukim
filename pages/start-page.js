import React, { useState } from 'react';
import { TextInput, StyleSheet, Button, Text } from 'react-native';

import * as Contacts from 'expo-contacts';

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '33%'
  }
});

const StartPage = () => {
  const contacts = [
    {
      name: 'Miri'
    },
    {
      name: 'Rotem'
    },
    {
      name: 'Shalom'
    }
  ];

  return (
    <>
      { contacts.map(contact => (
        <TextInput
          key={ contact.name }
          style={ styles.input }
          value={ contact.name } />
      ))}
      <Button title="Add Contact" onPress={ () => {} } />
    </>
  );
};

export default StartPage;
