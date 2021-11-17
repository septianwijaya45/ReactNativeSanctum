import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native';
import {Provider, useDispatch} from 'react-redux';
import {createStore} from 'redux';
import {ButtonCustom, Input} from '../../../components/atoms';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.wrapper.page}>
      <View style={styles.wrapper.title}>
        <Text>Login Page</Text>
      </View>
      <View style={styles.form.atom}>
        <View style={styles.form.input}>
          <Text>Email</Text>
          <Input
            placeholder="Insert Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.form.input}>
          <Text>Password</Text>
          <Input
            placeholder="Insert Password"
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>
        <ButtonCustom title="Login" type="text" />
        <TouchableOpacity>
          <Text
            onPress={() => {
              navigation.navigate('RegisterScreen');
            }}>
            Belum Punya Akun? Register Sekarang
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = {
  wrapper: {
    page: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
  },
  form: {
    atom: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      marginTop: 10,
      marginButton: 10,
    },
    inputText: {
      color: '#000000',
      width: 300,
    },
  },
};
