import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Attendance from '../screens/Attendance';

const AttendanceStack = createStackNavigator();

function AttendanceNavigator() {
  return (
    <AttendanceStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Attendance">
      <AttendanceStack.Screen name="Attendance" component={Attendance} />
    </AttendanceStack.Navigator>
  );
}

export default AttendanceNavigator;
