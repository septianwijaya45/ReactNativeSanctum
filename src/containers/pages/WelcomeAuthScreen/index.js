import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const WelcomeAuthScreen = ({navigation}) => {
  return (
    <View style={styles.wrapper.page}>
      <View style={{marginBottom: 10}}>
        <Text>Ini Logo</Text>
      </View>
      <View style={{marginBottom: 10}}>
        <Text>Sudah Punya Akun? Login Disini</Text>
        <Button
          type="Text"
          title="Login"
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
        />
      </View>
      <View>
        <Text>Atau Buat Akun</Text>
        <Button
          type="Text"
          title="Register"
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}
        />
      </View>
    </View>
  );
};

export default WelcomeAuthScreen;

const styles = {
  wrapper: {
    page: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      flex: 1,
    },
    account: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
};
