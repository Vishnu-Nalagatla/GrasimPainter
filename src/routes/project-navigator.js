import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyDay from '../screens/MyDay';
import ProjectDetails from '../screens/ProjectDetails';

const ProjectStack = createStackNavigator();

function ProjectNavigator() {
  return (
    <ProjectStack.Navigator headerMode="none">
      <ProjectStack.Screen name="MyDay" component={MyDay} />
      <ProjectStack.Screen name="ProjectsDetails" component={ProjectDetails} />
    </ProjectStack.Navigator>
  );
}

export default ProjectNavigator;
