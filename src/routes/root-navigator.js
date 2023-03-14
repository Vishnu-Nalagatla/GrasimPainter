import React, { useEffect, useState } from 'react';
import { BackHandler, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import LoginNavigator from './login-navigator';
import SplashNavigator from './splash-navigator';
import OnboardingNavigator from './onboarding-navigator';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, NativeBaseProvider, Text, View } from 'native-base';
import { Image } from 'react-native';

import paintRollerColor from '../assets/images/paintRollerColor/image.png';
import paintRoller from '../assets/images/paintRoller/image.png';
import teamColor from '../assets/images/teamColor/image.png';
import team from '../assets/images/team/image.png';
import myDayColor from '../assets/images/myDayColor/image.png';
import myDay from '../assets/images/myDay/image.png';
import attendanceColor from '../assets/images/attendanceColor/image.png';
import attendance from '../assets/images/attendance/image.png';

import menuImg from '../assets/images/menu/image.png';
import bellImg from '../assets/images/bell/image.png';

import Header from '../components/Common/Header';
import ProjectsNavigator from './projects-navigator';
import AttendanceNavigator from './attendance-navigator';
import MyTeamNavigator from './myteam-navigator';
import MyDayNavigator from './myday-navigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import util from '../util';
import Popup from '../components/Popup';
import POPUP_CONSTANTS from '../enums/popup';
import Drawer from '../components/Drawer';
import ViewPort from '../constants/view-port';
import colors from '../constants/colors';

import { createNavigationContainerRef } from '@react-navigation/native';
import RouteConfig from '../constants/route-config';

export const navigationRef = createNavigationContainerRef();

const { vh, vw } = ViewPort;

const RootStack = createStackNavigator();

const Tab = createBottomTabNavigator();

function onBackButtonPressed() {
  return false;
}

function RootNavigator(props) {
  const reduxProps = useSelector(state => state.loginReducer);
  const [popup, setPopup] = useState(undefined);
  const [showNotifications, setNotifications] = useState(undefined);


  const { isLoggedIn, loginInfo = {} } = reduxProps;
  // const {showOnboarding = false} = loginInfo;
  const showOnboarding = loginInfo?.showOnboarding;
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [userExist, setUserExists] = useState(false);
  const getPopupContent = () => {
    if (!popup) {
      return null;
    }
    switch (popup.type) {
      case POPUP_CONSTANTS.TOGGLE_DRAWER:
        return <Drawer closePopup={closePopup} navigation={popup.navigation} />;
      default:
        break;
    }
  };

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
    const currentDate = util.currentDate();
    // AsyncStorage.clear();
    AsyncStorage.getItem('currentUser_' + currentDate).then(user => {
      if (user) {
        setUserExists(true);
      } else setUserExists(false);
    });
  };

  const closePopup = () => {
    setPopup(undefined);
  };

  const headerOptions = (navigation, name, imgSource, onPress) => {
    return {
      showNotifications,
      headerTintColor: colors.white,
      tabBarLabelStyle: styles.tablelabelStyle,
      headerTitle: name,
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerLeft: () => (
        <TouchableOpacity
          style={styles.menuImg}
          onPress={() => {
            setPopup({ type: POPUP_CONSTANTS.TOGGLE_DRAWER, navigation });
          }}>
          <Image source={menuImg} style={styles.menuImg} resizeMode="contain" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={styles.bellIcon}
          onPress={() => navigation.navigate(RouteConfig.Notifications)}>
          <Image source={bellImg} style={styles.bellImg} resizeMode="contain" />
        </TouchableOpacity>
      ),
      tabBarIcon: ({ color, size }) => (
        <Image style={styles.icon} source={imgSource} />
      ),
    };
  };

  // TODO: Revisit the logic use tablist as Array List
  const getTabs = () => {
    return (
      <View style={{ flex: 1 }}>
        <Popup
          onPress={closePopup}
          popupStyle={styles.popupStyle}
          visible={!!popup}>
          {getPopupContent()}
        </Popup>
        <Tab.Navigator
          initialRouteName="MyDayNavigator"
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#2C4DAE',
            tabBarStyle: styles.tabBarStyle,
            tabBarLabel: ({ focused }) => {
              const style = focused ? styles.tabActiveStyles : styles.tabStyles;
              const hrStyle = focused ? styles.hrLine : null;
              return (
                <View style={styles.tabStyle}>
                  <Text style={style}>{route.name}</Text>
                  <View style={hrStyle}></View>
                </View>
              );
            },
          })}>
          <Tab.Screen
            name="MyDay"
            component={MyDayNavigator}
            options={({ navigation }) => {
              const imgSrc = navigation.isFocused() ? myDayColor : myDay;
              return headerOptions(navigation, 'MyDay', imgSrc);
            }}
          />

          <Tab.Screen
            name="Projects"
            component={ProjectsNavigator}
            options={({ navigation }) => {
              const imgSrc = navigation.isFocused()
                ? paintRollerColor
                : paintRoller;
              return headerOptions(navigation, 'Projects', imgSrc);
            }}
          />

          <Tab.Screen
            name="MyTeam"
            component={MyTeamNavigator}
            options={({ navigation }) => {
              const imgSrc = navigation.isFocused() ? teamColor : team;
              return headerOptions(navigation, 'My Team', imgSrc);
            }}
          />
          <Tab.Screen
            name="Attendance"
            component={AttendanceNavigator}
            options={({ navigation }) => {
              const imgSrc = navigation.isFocused()
                ? attendanceColor
                : attendance;
              return headerOptions(navigation, 'Attendance', imgSrc);
            }}
          />
        </Tab.Navigator>
      </View>
    );
  };
  const getScreen = userExist => {
    if (userExist || isLoggedIn) {
      return getTabs();
    } else {
      //  return getTabs();
      return (
        <RootStack.Navigator
          headerMode="none"
          screenOptions={{
            gestureEnabled: false,
          }}>
          <RootStack.Screen name="LoginNavigator" component={LoginNavigator} />
        </RootStack.Navigator>
      );
    }
  };

  return (
    <NativeBaseProvider>
      {showSplashScreen ? (
        <NavigationContainer independent={true}>
          <SplashNavigator />
        </NavigationContainer>
      ) : isLoggedIn && showOnboarding ? (
        <NavigationContainer independent={true}>
          <OnboardingNavigator />
        </NavigationContainer>
      ) : isLoggedIn == false ? (
        <NavigationContainer independent={true}>
          <LoginNavigator />
        </NavigationContainer>
      ) : (
        getScreen(userExist)
      )}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  tablelabelStyle: {
    color: '#2C4DAE',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 10,
  },
  tabBarStyle: {
    textDecorationLine: 'underline',
  },
  popupStyle: {
    flex: 1,
    height: 670 * vh,
    width: 302 * vw,
    marginRight: 58 * vw,
    marginBottom: 46 * vw,
  },
  icon: {
    width: 18 * vw,
    height: 18 * vh,
    marginTop: 15 * vh,
    marginBottom: 7 * vh,
  },
  menuImg: {
    height: 24 * vh,
    width: 24 * vw,
    backgroundColor: colors.primary,
    marginLeft: 8 * vw,
    marginRight: 32 * vw,
  },
  bellIcon: {
    alignItems: 'flex-end',
  },
  bellImg: {
    height: 24 * vh,
    width: 24 * vw,
    marginRight: 16 * vw,
  },
  tabStyles: {
    color: colors.primary,
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12 * vh,
    lineHeight: 12 * vh,
    paddingHorizontal: 4 * vh,
    marginBottom: 1 * vw,
  },
  tabActiveStyles: {
    color: colors.primary,
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    lineHeight: 12 * vh,
    paddingTop: 6 * vh,
    marginBottom: 1 * vw,
  },
  hrLine: {
    borderColor: colors.primary,
    borderBottomWidth: 4 * vh,
    marginTop: 4 * vw,
    marginBottom: 1 * vw,
    width: 80 * vw,
  },
  tabStyle: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    width: 90 * vw,
    height: 56 * vh,
    alignItems: 'center',
  },
});

export default RootNavigator;
