import React, { useEffect, useState } from 'react';
import { BackHandler, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import LoginNavigator from './login-navigator';
import SplashNavigator from './splash-navigator';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider } from 'native-base';
import { Image } from 'react-native';

import groupIcon from '../assets/images/group/image.png';
import paintRollerColor from '../assets/images/paintRollerColor/image.png';
import teamColor from '../assets/images/teamColor/image.png';
import myDayColor from '../assets/images/myDayColor/image.png';
import attendanceColor from '../assets/images/attendanceColor/image.png';

import Header from '../components/Common/Header';
import ProjectsNavigator from './projects-navigator';
import AttendanceNavigator from './attendance-navigator';
import MyTeamNavigator from './myteam-navigator';
import MyDayNavigator from './myday-navigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootStack = createStackNavigator();

const Tab = createBottomTabNavigator();

function onBackButtonPressed() {
  return false;
}

function RootNavigator(props) {
  const reduxProps = useSelector(state => state);
  const { login } = reduxProps;
  const { isLoggedIn } = login;
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  // TODO: Revisit the logic
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackButtonPressed);
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
    setStorage();
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackButtonPressed);
    };
  }, []);

  const setStorage = () => {
    const date = new Date();
    const currentDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    const prevDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() - 1;
    AsyncStorage.removeItem('loggedInUser_' + prevDate);
    AsyncStorage.getItem('loggedInUser_' + currentDate).then(user => {
      if (user) {
        this.userExists = true;
      }
    });
  }

  // TODO: Revisit the logic use tablist as Array List
  const getTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName="MyDayNavigator"
        screenOptions={{
          tabBarActiveTintColor: '#2C4DAE',
        }}>
        <Tab.Screen
          name="MyDay"
          component={MyDayNavigator}
          options={{
            header: Header,
            tabBarLabelStyle: styles.tablelabelStyle,
            title: 'My Day',
            tabBarIcon: ({ color, size }) => (
              <Image style={styles.icon} source={myDayColor} />
            ),
          }}
        />
        <Tab.Screen
          name="Projects"
          component={ProjectsNavigator}
          options={{
            header: Header,
            tabBarLabelStyle: styles.tablelabelStyle,
            title: 'Projects',
            tabBarIcon: ({ color, size }) => (
              <Image style={styles.icon} source={paintRollerColor} />
            ),
          }}
        />
        <Tab.Screen
          name="My Team"
          component={MyTeamNavigator}
          options={{
            header: Header,
            tabBarLabelStyle: styles.tablelabelStyle,
            title: 'My Team',
            tabBarIcon: ({ color, size }) => (
              <Image style={styles.icon} source={teamColor} />
            ),
          }}
        />
        <Tab.Screen
          name="Attendance"
          component={AttendanceNavigator}
          options={{
            header: Header,
            tabBarLabelStyle: styles.tablelabelStyle,
            title: 'Attendance',
            tabBarIcon: ({ color, size }) => (
              <Image style={styles.icon} source={attendanceColor} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const getScreen = () => {

    if (this.userExists || isLoggedIn) {
      return getTabs();
    } else {
      return getTabs();
      // return (
      //   <RootStack.Navigator
      //     headerMode="none"
      //     screenOptions={{
      //       gestureEnabled: false,
      //     }}>
      //     <RootStack.Screen name="LoginNavigator" component={LoginNavigator} />
      //   </RootStack.Navigator>
      // );
    }
  };

  return (
    <NativeBaseProvider>
      {showSplashScreen ? (
        <NavigationContainer independent={true}>
          <SplashNavigator />
        </NavigationContainer>
      ) : (
        getScreen()
      )}
    </NativeBaseProvider>

    // <NativeBaseProvider>
    // 	<NavigationContainer independent={true} >
    // 		<RootStack.Navigator
    // 			headerMode="none"
    // 			screenOptions={{
    // 				gestureEnabled: false,
    // 			}}>
    // 			<RootStack.Screen name="LoginNavigator" component={LoginNavigator} />
    // 		</RootStack.Navigator>
    // 	</NavigationContainer>
    // </NativeBaseProvider>

    // <NativeBaseProvider>
    // 	<NavigationContainer independent={true} >
    // 		<SplashNavigator />
    // 	</NavigationContainer>
    // </NativeBaseProvider>

    // <NativeBaseProvider>
    // 	{getTabs()}
    // </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  tablelabelStyle: {
    color: '#2C4DAE',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 10,
  },
  icon: { width: 20, height: 20, marginTop: 15, marginBottom: 5 },
});

export default RootNavigator;
