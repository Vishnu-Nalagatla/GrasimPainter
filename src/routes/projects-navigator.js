import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Projects from '../screens/Projects';

const ProjectsStack = createStackNavigator();

function ProjectsNavigator() {
    return (
        <ProjectsStack.Navigator headerMode="none" initialRouteName="Projects">
            <ProjectsStack.Screen name="Projects" component={Projects} />
        </ProjectsStack.Navigator>
    );
}

export default ProjectsNavigator;
