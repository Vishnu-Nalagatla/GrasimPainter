import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyDay from '../screens/MyDay';

const ProjectStack = createStackNavigator();

function ProjectNavigator() {
    return (
        <ProjectStack.Navigator headerMode="none">
            <ProjectStack.Screen name="MyDay" component={MyDay} />
        </ProjectStack.Navigator>
    );
}

export default ProjectNavigator;
