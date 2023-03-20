import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Projects from '../screens/Projects';
import CapturePics from '../screens/CapturePics';
import ProfileNavigator from './profile-navigator';
import Insights from '../screens/Insights';

const ProjectsStack = createStackNavigator();

function ProjectsNavigator() {
  return (
    <ProjectsStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Projects">
      <ProjectsStack.Screen name="Projects" component={Projects} />
      <ProjectsStack.Screen name="CapturePics" component={CapturePics} />
      <ProjectsStack.Screen name="ProfileNavigator" component={ProfileNavigator} />
      <ProjectsStack.Screen name="Insights" component={Insights} />
    </ProjectsStack.Navigator>
  );
}

export default ProjectsNavigator;
