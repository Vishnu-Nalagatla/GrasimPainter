import React, {useEffect, useState} from 'react';
import {BackHandler, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import LoginNavigator from './login-navigator';
// import ProjectNavigator from './project-navigator';
// import SplashNavigator from './splash-navigator';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeBaseProvider} from 'native-base';
import {Image} from 'react-native';
import groupIcon from '../assets/images/group/image.png';
import Login from '../screens/Login';
import MyDay from '../screens/MyDay';
import Header from '../components/Common/Header';

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

  // TODO: Revisit the logic use tablist as Array List
  const getTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName="ProjectNavigator"
        screenOptions={{
          tabBarActiveTintColor: '#2C4DAE',
        }}>
        <Tab.Screen
          name="MyDay"
          component={MyDay}
          options={{
            header: Header,
            tabBarLabelStyle: styles.tablelabelStyle,
            title: 'My Day',
            tabBarIcon: ({color, size}) => (
              <Image style={styles.icon} source={groupIcon} />
            ),
          }}
        />
        <Tab.Screen
          name="Projects"
          component={Login}
          options={{
            header: Header,
            tabBarLabelStyle: styles.tablelabelStyle,
            title: 'Projects',
            tabBarIcon: ({color, size}) => (
              <Image style={styles.icon} source={groupIcon} />
            ),
          }}
        />

        <Tab.Screen
          name="My Team"
          component={Login}
          options={{
            header: Header,
            tabBarLabelStyle: styles.tablelabelStyle,
            title: 'My Team',
            tabBarIcon: ({color, size}) => (
              <Image style={styles.icon} source={groupIcon} />
            ),
          }}
        />
        <Tab.Screen
          name="Attendance"
          component={Login}
          options={{
            header: Header,
            tabBarLabelStyle: styles.tablelabelStyle,
            title: 'Attendance',
            tabBarIcon: ({color, size}) => (
              <Image style={styles.icon} source={groupIcon} />
            ),
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

const styles = StyleSheet.create({
  tablelabelStyle: {
    color: '#2C4DAE',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 10,
  },
  icon: {width: 25, height: 30, marginTop: 15, marginBottom: 5},
});

export default RootNavigator;
