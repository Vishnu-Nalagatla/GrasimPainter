import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		...StyleSheet.absoluteFillObject,
		zIndex: 5,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.50)',
	},
	popup: {
		backgroundColor: '#FFFFFF',
		borderRadius: 5,
		zIndex: 6,
	},
});
