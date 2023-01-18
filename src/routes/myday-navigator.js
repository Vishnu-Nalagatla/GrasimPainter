import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyDay from '../screens/MyDay';
import ProjectDetails from '../screens/ProjectDetails';

const MyDayStack = createStackNavigator();

function MyDayNavigator() {
  return (
    <MyDayStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MyDay">
      <MyDayStack.Screen name="MyDay" component={MyDay} />
      <MyDayStack.Screen name="ProjectsDetails" component={ProjectDetails} />
    </MyDayStack.Navigator>
  );
}

export default MyDayNavigator;
