import React, { useEffect, useState } from 'react';
import { BackHandler, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import LoginNavigator from './login-navigator';
import SplashNavigator from './splash-navigator';
import OnboardingNavigator from './onboarding-navigator';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, NativeBaseProvider, View } from 'native-base';
import { Image } from 'react-native';

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
import util from '../util';
import Popup from '../components/Popup';
import POPUP_CONSTANTS from '../enums/popup';
import Drawer from '../components/Drawer';

import menuImg from '../assets/images/menu/image.png';
import bellImg from '../assets/images/bell/image.png';

import ViewPort from '../constants/view-port';
import colors from '../constants/colors';

import { createNavigationContainerRef } from '@react-navigation/native';
import RouteConfig from '../constants/route-config';

export const navigationRef = createNavigationContainerRef()

const { vh, vw } = ViewPort;



const RootStack = createStackNavigator();

const Tab = createBottomTabNavigator();

function onBackButtonPressed() {
  return false;
}

function RootNavigator(props) {
  const reduxProps = useSelector(state => state);
  const [popup, setPopup] = useState(undefined);
  const [showNotifications, setNotifications] = useState(undefined);

  
  const { login } = reduxProps;
  const { isLoggedIn, loginInfo = {} } = login;
  const { showOnboarding = false } = loginInfo;
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  const getPopupContent = () => {
    if (!popup) {
      return null;
    }
    switch (popup.type) {
      case POPUP_CONSTANTS.TOGGLE_DRAWER:
        return <Drawer closePopup={closePopup} navigation={popup.navigation}/>;
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
    AsyncStorage.clear();
    // this.userExists = {};
    AsyncStorage.getItem('currentUser_' + currentDate).then(user => {
      if (user) {
        this.userExists = true;
      }
    });
  };

  const closePopup = () => {
    setPopup(undefined);
  };

  const headerOptions = (navigation, name,imgSource)=>{
    return ({
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
            setPopup({ type: POPUP_CONSTANTS.TOGGLE_DRAWER , navigation});
          }}>
          <Image
            source={menuImg}
            style={styles.menuImg}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={styles.bellIcon}
          onPress={()=>  navigation.navigate(RouteConfig.Notifications)  }>
          <Image source={bellImg} style={styles.bellImg} resizeMode="contain" />
        </TouchableOpacity>
      ),
      tabBarIcon: ({color, size}) => (
        <Image style={styles.icon} source={imgSource} />
      ),
    })
  }

  // TODO: Revisit the logic use tablist as Array List
  const getTabs = () => {
    return (
      <View style={{ flex: 1 }}>
        <Popup popupStyle={styles.popupStyle} visible={!!popup}>
          {getPopupContent()}
        </Popup>
        <Tab.Navigator
          initialRouteName="MyDayNavigator"
          screenOptions={{
            tabBarActiveTintColor: '#2C4DAE',
          }}>
          <Tab.Screen
            name="MyDay"
            component={MyDayNavigator}
            options={({navigation }) => headerOptions(navigation, 'MyDay', teamColor)}
          />

          <Tab.Screen
            name="Projects"
            component={ProjectsNavigator}
            options={({navigation }) => headerOptions(navigation, 'Projects', paintRollerColor)}
          />

          <Tab.Screen
            name="My Team"
            component={MyTeamNavigator}
            options={({navigation }) => headerOptions(navigation, 'My Team', teamColor)}
          />

          <Tab.Screen
            name="Attendance"
            component={AttendanceNavigator}
            options={({navigation }) => headerOptions(navigation, 'Attendance', attendanceColor)}
          />
        </Tab.Navigator>
      </View>
    );
  };
  const getScreen = () => {
    if (this.userExists || isLoggedIn) {
      return getTabs();
    } else {
      // return getTabs();
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
      ) : (
        getScreen()
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
  popupStyle:{
    flex:1,
    height: 670 * vh,
    width: 302 * vw,
    marginRight: 58 * vw,
    marginBottom: 46 * vw,
  },
  icon: { width: 20, height: 20, marginTop: 15, marginBottom: 5 },
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
});

export default RootNavigator;
