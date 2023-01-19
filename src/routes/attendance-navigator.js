import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Attendance from '../screens/Attendance';
import ApplyLeave from '../screens/ApplyLeave';

const AttendanceStack = createStackNavigator();

function AttendanceNavigator() {
  return (
    <AttendanceStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Attendance">
      <AttendanceStack.Screen name="Attendance" component={Attendance} />
      <AttendanceStack.Screen name="ApplyLeave" component={ApplyLeave} />
    </AttendanceStack.Navigator>
  );
}

export default AttendanceNavigator;
