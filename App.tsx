// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  */

// // import { NewAppScreen } from '@react-native/new-app-screen';
// // import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

// // function App() {
// //   const isDarkMode = useColorScheme() === 'dark';

// //   return (
// //     <View style={styles.container}>
// //       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
// //       <NewAppScreen templateFileName="App.tsx" />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// // });

// // export default App;

// import { StyleSheet, Text, View, PermissionsAndroid } from 'react-native'
// import React from 'react'
//   import { useEffect } from 'react';
// import messaging from '@react-native-firebase/messaging';
// // import { useNotification } from './src/notifications/UseNotification'

// const App = () => {
//   // useNotification();

// const requestPermission = async () => {
//   const granted = await PermissionsAndroid.request(
//     PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
//   );

//   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//     console.log('Notification Permission Granted');
//   } else {
//     console.log('Notification Permission Denied');
//   }
// };

// const getToken = async () => {
//   try {
//     const token = await messaging().getToken();
//     console.log('FCM Token:', token);
//   } catch (error) {
//     console.error('Failed to Get Token', error);
//   }
// };

//   useEffect(() => {
//     requestPermission();
//     getToken();
//   }, []);

//   return (
//     <View style={{alignItems:"center", justifyContent:"center",flex:1}}>
//       <Text >FireBase Push Notifications</Text>
//     </View>
//   )
// }

// export default App;

// const styles = StyleSheet.create({})

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
