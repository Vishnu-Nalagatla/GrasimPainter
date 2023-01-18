import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyTeam from '../screens/MyTeam';

const MyTeamStack = createStackNavigator();

function MyTeamNavigator() {
  return (
    <MyTeamStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MyTeam">
      <MyTeamStack.Screen name="MyTeam" component={MyTeam} />
    </MyTeamStack.Navigator>
  );
}

export default MyTeamNavigator;
