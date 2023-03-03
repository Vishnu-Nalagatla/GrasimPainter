import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Projects from '../screens/Projects';
import Insights from '../screens/Insights';

const ProjectsStack = createStackNavigator();

function ProjectsNavigator() {
  return (
    <ProjectsStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Projects">
      <ProjectsStack.Screen name="Projects" component={Projects} />
      <ProjectsStack.Screen name="Insights" component={Insights} />
    </ProjectsStack.Navigator>
  );
}

export default ProjectsNavigator;
