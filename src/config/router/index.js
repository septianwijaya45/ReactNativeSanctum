import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  LoginScreen,
  RegisterScreen,
  SplashScreen,
  WelcomeAuthScreen,
} from '../../containers/pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeAuthScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="WelcomeAuthScreen"
        component={WelcomeAuthScreen}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        // options={{
        //   headerTitle: '',
        //   headerRight: () => {
        //     <Button
        //       title="back"
        //       color="#ddd"
        //       onPress={() => {
        //         alert('hahaha');
        //       }}
        //     />;
        //   },
        // }}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Router;
