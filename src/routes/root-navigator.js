import React, { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { useSelector } from 'react-redux';
import LoginNavigator from './login-navigator';
import ProjectNavigator from './project-navigator';
import SplashNavigator from './splash-navigator';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

const RootStack = createStackNavigator();

function onBackButtonPressed() {
	return false;
}

function RootNavigator(props) {
	const reduxProps = useSelector((state) => state);
	const { login } = reduxProps;
	const { isLoggedIn } = login;
	const [showSplashScreen, setShowSplashScreen] = useState(true);

	// TODO: Revisit the logic
	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', onBackButtonPressed);
		setTimeout(() => {
			setShowSplashScreen(false);
		}, 3000);
		return () => {
			BackHandler.removeEventListener('hardwareBackPress', onBackButtonPressed);
		};
	}, []);

	const getScreen = () => {
		if (isLoggedIn) {
			return <RootStack.Screen name="ProjectNavigator" component={ProjectNavigator} />;
		} else {
			return <RootStack.Screen name="LoginNavigator" component={LoginNavigator} />;
		}
	};

	return (
		<NativeBaseProvider>
			<NavigationContainer independent={true} >
				{/* {showSplashScreen ? ( */}
				<SplashNavigator />
				{/* ) : (
					<RootStack.Navigator
					headerMode="none"
						screenOptions={{
							gestureEnabled: false,
						}}>
						{getScreen()}
					</RootStack.Navigator>
				)} */}
			</NavigationContainer>
		</NativeBaseProvider>
	);
}

export default RootNavigator;
