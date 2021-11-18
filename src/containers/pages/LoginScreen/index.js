import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native';
import {Provider, useDispatch} from 'react-redux';
import {createStore} from 'redux';
import {ButtonCustom, Input} from '../../../components/atoms';

const LoginScreen = ({navigation}) => {
  const [errorMessage, setError] = useState(''),
    [successMessage, setSuccess] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState('');

  const submit = () => {
    const data = {
      email,
      password,
    };
    if (!email) {
      Alert.alert('Email Harus Diisi!');
    }

    if (!password) {
      Alert.alert('Password Harus Diisi!');
    }

    if (!email && !password) {
      Alert.alert('Email dan Password Harus Diisi!');
    }
  };

  useEffect(() => {
    console.log(submit);
  }, []);
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
            secureTextEntry={true}
          />
        </View>
        <ButtonCustom title="Login" type="text" onPress={submit} />
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
