import React, {useEffect, useState} from 'react';

import * as routes from './routes';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import Splash from '../../screens/splash/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../../screens/login/LoginScreen';

export type RootStackParamList = {
  [routes.NAVIGATION_LOGIN_ROUTE]: {};
};
export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof routes.NAVIGATION_LOGIN_ROUTE
>;

const Stack = createStackNavigator<RootStackParamList>();
export const RootStack = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);
  }, []);

  if (showSplashScreen) {
    return <Splash />;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={routes.NAVIGATION_LOGIN_ROUTE}>
      <Stack.Screen
        name={routes.NAVIGATION_LOGIN_ROUTE}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export const Navigation = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
