import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../screens/Onboarding';
import Login from '../screens/Login';

const OnboardingStack = createStackNavigator();

function OnboardingNavigator() {
    return (
        <OnboardingStack.Navigator screenOptions={{ headerShown: false }}>
            <OnboardingStack.Screen name="Onboarding" component={Onboarding} />
            <OnboardingStack.Screen name="Login" component={Login} />
        </OnboardingStack.Navigator>
    );
}

export default OnboardingNavigator;
