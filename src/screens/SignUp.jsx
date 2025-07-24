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

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const register = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Please Fill all the fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Password do not match');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User Created Successfully');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        navigation.navigate('Login');
      })
      .catch(error => {
        console.log('Error ', error);
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
          <Mttextinput
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <MyButtton title="Sign Up" onPress={register} />
          <Text style={styles.ortext}>OR </Text>
          <SocialMedia />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUp;

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
