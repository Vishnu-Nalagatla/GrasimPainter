import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Otp from '../screens/Otp';
import Help from '../screens/Help';
import {NavigationContainer} from '@react-navigation/native';

const LoginStack = createStackNavigator();

function LoginNavigator() {
  return (
    <NavigationContainer independent={true}>
      <LoginStack.Navigator headerMode="none">
        <LoginStack.Screen name="Login" component={Login} />
        <LoginStack.Screen name="Otp" component={Otp} />
        <LoginStack.Screen name="Help" component={Help} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}

export default LoginNavigator;
