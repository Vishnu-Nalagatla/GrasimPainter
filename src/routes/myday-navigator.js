import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyDay from '../screens/MyDay';
import ProjectDetails from '../screens/ProjectDetails';
import LeaveRequests from '../screens/LeaveRequests';
import Approve from '../screens/Approve';
import CrewCalendar from '../screens/CrewCalendar';
import ClinetInfo from '../screens/ClinetInfo';
import Notifications from '../screens/Notifications';
import Benefits from '../screens/Benefits';
import ProfileNavigator from './profile-navigator';
import Trainings from '../screens/Trainings';
import Help from '../screens/Help';
import ProfileProjectDetails from '../screens/ProfileProjectDetails';
import ProfileProjects from '../screens/ProfileProjects';
import OnboardingNavigator from './onboarding-navigator';
import HelpAndSupport from '../screens/HelpAndSupport';
import EnterOTP from '../screens/EnterOTP';







const MyDayStack = createStackNavigator();

function MyDayNavigator() {
  return (
    <MyDayStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="MyDay">
      <MyDayStack.Screen name="MyDay" component={MyDay} />
      <MyDayStack.Screen name="Benefits" component={Benefits} />
      <MyDayStack.Screen name="CrewCalendar" component={CrewCalendar} />
      <MyDayStack.Screen name="ProjectDetails" component={ProjectDetails} />
      <MyDayStack.Screen name="LeaveRequests" component={LeaveRequests} />
      <MyDayStack.Screen name="Approve" component={Approve} />
      <MyDayStack.Screen name="ClinetInfo" component={ClinetInfo} />
      <MyDayStack.Screen name="Notifications" component={Notifications} />
      <MyDayStack.Screen name="Trainings" component={Trainings} />
      <MyDayStack.Screen name="Help" component={Help} />
      <MyDayStack.Screen name="ProfileProjects" component={ProfileProjects} />
      <MyDayStack.Screen name="HelpAndSupport" component={HelpAndSupport} />
      <MyDayStack.Screen name="EnterOTP" component={EnterOTP} />
      <MyDayStack.Screen name="ProfileProjectDetails" component={ProfileProjectDetails} />
      <MyDayStack.Screen name="ProfileNavigator" component={ProfileNavigator} />
    </MyDayStack.Navigator>
  );
}

export default MyDayNavigator;
