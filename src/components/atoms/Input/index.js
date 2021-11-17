import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({placeholder, ...rest}) => {
  return <TextInput style={styles.input} placeholder={placeholder} {...rest} />;
};

export default Input;

const styles = {
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 14,
    color: '#000',
    width: 280,
    height: 40,
  },
};
