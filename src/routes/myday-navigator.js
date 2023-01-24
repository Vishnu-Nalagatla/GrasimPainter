import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyDay from '../screens/MyDay';
import ProjectDetails from '../screens/ProjectDetails';
import LeaveRequests from '../screens/LeaveRequests';
import Approve from '../screens/Approve';
import CrewCalendar from '../screens/CrewCalendar';



const MyDayStack = createStackNavigator();

function MyDayNavigator() {
  return (
    <MyDayStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MyDay">
      <MyDayStack.Screen name="MyDay" component={MyDay} />
      <MyDayStack.Screen name="ProjectsDetails" component={ProjectDetails} />
      <MyDayStack.Screen name="LeaveRequests" component={LeaveRequests} />
      <MyDayStack.Screen name="Approve" component={Approve} />
      <MyDayStack.Screen name="CrewCalendar" component={CrewCalendar} />
    </MyDayStack.Navigator>
  );
}

export default MyDayNavigator;
