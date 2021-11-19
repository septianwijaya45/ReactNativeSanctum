import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ButtonCustom, Input} from '../../../components/atoms';
import {BASE_URL} from '@env';
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';
import {getDeviceName} from 'react-native-device-info';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [deviceName, setDeviceName] = useState('');
  const [errorMessage, setError] = useState(''),
    [successMessage, setSuccess] = useState('');

  const submit = () => {
    if (!email && !password && !name) {
      alert('Nama, Email dan Password Harus Diisi!');
    } else if (!name) {
      alert('Nama Harus Diisi!');
    } else if (!email) {
      alert('Email Harus Diisi!');
    } else if (!password) {
      alert('Password Harus Diisi!');
    } else {
      DeviceInfo.getDeviceName().then(deviceName => {
        setDeviceName(deviceName);
      });
      const data = {
        name: name,
        email: email,
        password: password,
        deviceName: deviceName,
      };
      axios
        .post(`https://22f1-125-166-13-219.ngrok.io/api/register`, data)
        .then(response => {
          if (response.data.status === false) {
            const errMessage = response.data.messages;
            setError(errMessage);
            console.log(errMessage);
          } else {
            setError('');
            setSuccess('User Success Create!');
            console.log(successMessage);
          }
        })
        .catch(e => console.log(e));
    }
  };

  return (
    <View style={styles.wrapper.page}>
      <View style={styles.wrapper.title}>
        <Text>Register Page</Text>
      </View>
      <View style={styles.form.atom}>
        <View style={styles.form.input}>
          <Text>Name</Text>
          <Input
            placeholder="Insert Name"
            onChangeText={text => setName(text)}
            value={name}
          />
          {!!errorMessage && (
            <Text style={{color: '#FF0000'}}>
              {' '}
              {errorMessage.name}
              {''}
            </Text>
          )}
        </View>
        <View style={styles.form.input}>
          <Text>Email</Text>
          <Input
            placeholder="Insert Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          {!!errorMessage && (
            <Text style={{color: '#FF0000'}}>
              {' '}
              {errorMessage.email}
              {''}
            </Text>
          )}
        </View>
        <View style={styles.form.input}>
          <Text>Password</Text>
          <Input
            placeholder="Insert Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          {!!errorMessage && (
            <Text style={{color: '#FF0000'}}>{errorMessage.password}</Text>
          )}
        </View>
        {!!successMessage && (
          <Text style={{color: '#27ae60'}}>{successMessage}</Text>
        )}
        <ButtonCustom title="Register" type="text" onPress={submit} />
        <TouchableOpacity>
          <Text
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            Sudah Punya Akun? Login Disini
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

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
