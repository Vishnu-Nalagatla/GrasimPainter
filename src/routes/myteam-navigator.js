import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyTeam from '../screens/MyTeam';
import SendUpdates from '../screens/SendUpdates';
import CapturePics from '../screens/CapturePics';

const MyTeamStack = createStackNavigator();

function MyTeamNavigator() {
  return (
    <MyTeamStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SendUpdates">
        {/* <MyTeamStack.Screen name="MyTeam" component={MyTeam} /> */}
      <MyTeamStack.Screen name="SendUpdates" component={SendUpdates} />
      <MyTeamStack.Screen name="CapturePics" component={CapturePics} />
    </MyTeamStack.Navigator>
  );
}

export default MyTeamNavigator;
