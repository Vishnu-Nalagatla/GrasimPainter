import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyTeam from '../screens/MyTeam';
import SendUpdates from '../screens/SendUpdates';
import CapturePics from '../screens/CapturePics';
import CrewDetails from '../screens/CrewDetails';
import CrewProfile from '../screens/CrewProfile';
import ProfileNavigator from './profile-navigator';

const MyTeamStack = createStackNavigator();

function MyTeamNavigator() {
  return (
    <MyTeamStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="MyTeam">
      <MyTeamStack.Screen name="MyTeam" component={MyTeam} />
      <MyTeamStack.Screen name="CrewDetails" component={CrewDetails} />
      <MyTeamStack.Screen name="CrewProfile" component={CrewProfile} />
      <MyTeamStack.Screen name="SendUpdates" component={SendUpdates} />
      <MyTeamStack.Screen name="CapturePics" component={CapturePics} />
      <MyTeamStack.Screen name="ProfileNavigator" component={ProfileNavigator} />
    </MyTeamStack.Navigator>
  );
}

export default MyTeamNavigator;
