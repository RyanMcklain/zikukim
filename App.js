import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import call from 'react-native-phone-call'

export default function App() {
  const onPress = () => {
    console.log('touch?');
    // Linking.openSettings();
    Linking.openURL(`tel:11111`);
    // RNImmediatePhoneCall.immediatePhoneCall('0123456789');
    // const args = {
    //   number: '9093900003', // String value with the number to call
    //   prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
    // // };
    //
    // call(args).catch(console.error)
  };

  return (
    <View style={styles.container}>
      <Button title="batshit crazy!" onPress={ onPress }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
