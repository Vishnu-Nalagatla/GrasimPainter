import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Help from '../screens/Help';
import Benefits from '../screens/Benefits';
import Trainings from '../screens/Trainings';
import ProfileProjects from '../screens/ProfileProjects';

const ProfileStack = createStackNavigator();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator
      screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Benefits" component={Benefits} />
      <ProfileStack.Screen name="Trainings" component={Trainings} />
      <ProfileStack.Screen name="Help" component={Help} />  
      <ProfileStack.Screen name="ProfileProjects" component={ProfileProjects} />
    </ProfileStack.Navigator>
  );
}

export default ProfileNavigator;
