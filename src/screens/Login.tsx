import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import MyButtton from '../components/MyButtton';
import Mttextinput from '../components/Mttextinput';
import SocialMedia from '../components/SocialMedia';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const userlogin = () => {
    if (!email || !password) {
      Alert.alert('Please Fill both field');
      return;
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Response', res);
        Alert.alert('User Logged in Successfully');
        setEmail('');
        setPassword('');
        navigation.navigate('Home');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../notifications/assets/background.png')}
        style={styles.imagebackground}
      >
        <Image
          source={require('../notifications/assets/food/food.png')}
          style={styles.foodimage}
        />
        <Text style={styles.title}>Fatmore</Text>
        {/* Form Container */}
        <View style={styles.inputcontainer}>
          <Mttextinput
            placeholder="Enter E-mail or User Name"
            value={email}
            onChangeText={setEmail}
          />
          <Mttextinput
            placeholder="Enter Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.textdonthave}>Don't Have An Account yet</Text>

          <MyButtton title="Login" onPress={userlogin} />
          <Text style={styles.ortext}>OR </Text>
          <SocialMedia />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1 },
  imagebackground: {
    height: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  foodimage: {
    height: 50,
    width: 90,
    position: 'absolute',
    resizeMode: 'stretch',
    right: 20,
    top: Platform.OS == 'android' ? 20 : 50,
  },
  title: {
    fontSize: 40,
    color: '#fff',
    marginTop: Platform.OS == 'android' ? 60 : 120,
    fontFamily: 'Audiowide-Regular',
  },
  inputcontainer: {
    height: 450,
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  ortext: {
    fontSize: 20,
    color: 'gray',
    marginTop: 20,
    fontFamily: 'Audiowide-Regular',
  },
  textdonthave: {
    alignSelf: 'flex-end',
    marginRight: 10,
    color: 'black',
    marginBottom: 15,
    fontFamily: 'NovaFlat-Regular',
  },
});
