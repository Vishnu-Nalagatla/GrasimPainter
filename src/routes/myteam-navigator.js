import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyTeam from '../screens/MyTeam';

const MyTeamStack = createStackNavigator();

function MyTeamNavigator() {
    return (
        <MyTeamStack.Navigator headerMode="none" initialRouteName="MyTeam">
            <MyTeamStack.Screen name="MyTeam" component={MyTeam} />
        </MyTeamStack.Navigator>
    );
}

export default MyTeamNavigator;
