import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonCustom = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCustom;

const styles = {
  container: {
    width: 280,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#baba',
    borderRadius: 40,
    padding: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Light',
    textAlign: 'center',
  },
};
