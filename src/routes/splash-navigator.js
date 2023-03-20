import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';

const SplashStack = createStackNavigator();

function SplashNavigator() {
  return (
    <SplashStack.Navigator screenOptions={{ headerShown: false }}>
      <SplashStack.Screen name="SplashScreen" component={SplashScreen} />
      <SplashStack.Screen name="Login" component={Login} />
    </SplashStack.Navigator>
  );
}

export default SplashNavigator;
