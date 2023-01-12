import React, {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import {useSelector} from 'react-redux';
import LoginNavigator from './login-navigator';
import ProjectNavigator from './project-navigator';
import SplashNavigator from './splash-navigator';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeBaseProvider} from 'native-base';
import {Image} from 'react-native';
import groupIcon from '../assets/images/group/image.png';
import Login from '../screens/Login';
import MyDay from '../screens/MyDay';

const RootStack = createStackNavigator();

const Tab = createBottomTabNavigator();

function onBackButtonPressed() {
  return false;
}

function RootNavigator(props) {
  const reduxProps = useSelector(state => state);
  const {login} = reduxProps;
  const {isLoggedIn} = login;
  const [showSplashScreen, setShowSplashScreen] = useState(false);

  // TODO: Revisit the logic
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackButtonPressed);
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackButtonPressed);
    };
  }, []);

  const getTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName="ProjectNavigator"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight:'700',
          },
        }}>
        <Tab.Screen
          name="MyDay"
          component={MyDay}
          options={{
            tabBarLabel: 'MyDay',
            tabBarIcon: ({color, size}) => {
              return (
                <Image style={{width: size, height: 30}} source={groupIcon} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Projects"
          component={Login}
          options={{
            tabBarLabel: 'Projects',
            tabBarIcon: ({color, size}) => {
              return (
                <Image style={{width: size, height: 30}} source={groupIcon} />
              );
            },
          }}
        />

        <Tab.Screen
          name="My Team"
          component={Login}
          options={{
            tabBarLabel: 'My Team',
            tabBarIcon: ({color, size}) => {
              return (
                <Image style={{width: size, height: 30}} source={groupIcon} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Attendance"
          component={Login}
          options={{
            tabBarLabel: 'Attendance',
            tabBarIcon: ({color, size}) => {
              return (
                <Image style={{width: size, height: 30}} source={groupIcon} />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  const getScreen = () => {
    if (true) {
      getTabs();
      // return (
      //   <RootStack.Screen
      //     name="ProjectNavigator"
      //     component={ProjectNavigator}
      //   />
      // );
    } else {
      return (
        <RootStack.Screen name="LoginNavigator" component={LoginNavigator} />
      );
    }
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer independent={true}>
        {getTabs()}
        {/* {showSplashScreen ? (
          <SplashNavigator />
        ) : (
          getTabs()
          // <RootStack.Navigator
          //   headerMode="none"
          //   screenOptions={{
          //     gestureEnabled: false,
          //   }}>
          //   {getScreen()}
          // </RootStack.Navigator>
        )} */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default RootNavigator;
