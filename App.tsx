

import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import MyStack from './src/Navigation/MyStack';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  const requestPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    if (granted == PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Permission granted ');
    } else {
      console.log('Permission Denied');
    }
  };
  // const getToken = async () => {
  //   try {
  //     const token = await messaging().getToken();
  //     console.log('Token', token);
  //   } catch (error) {
  //     console.log('Error getting Token');
  //   }
  // };
  const getToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('Token:', token);
  } catch (error) {
    console.log('Error getting Token:', error.message);
  }
};

  useEffect(() => {
    requestPermission();
    getToken();
  }, []);
  return <MyStack />;
};

export default App;

const styles = StyleSheet.create({});
