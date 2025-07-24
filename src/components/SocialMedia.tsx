import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SocialMedia = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../notifications/assets/SocialMediaIcons/facebook.png')}
        style={styles.image}
      />
      <Image
        source={require('../notifications/assets/SocialMediaIcons/twitter.png')}
        style={styles.twittericon}
      />
      <Image
        source={require('../notifications/assets/SocialMediaIcons/google.png')}
        style={styles.image}
      />
    </View>
  );
};

export default SocialMedia;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems:"center"
  },
  image: { height: 40, width: 40 },
  twittericon: { height: 60, width: 60, marginTop: 15 },
});
