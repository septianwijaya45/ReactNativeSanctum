import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      //   navigation.replace('WelcomeAuthScreen');
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.wrapper.page}>
      <View style={styles.wrapper.logo}>
        <Text>Ini Splash Screen</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = {
  wrapper: {
    page: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      flex: 1,
    },
    logo: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
  },
};
