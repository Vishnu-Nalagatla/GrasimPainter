import { StyleSheet } from 'react-native';

import ViewPort from '../../constants/view-port';
const { vw, vh } = ViewPort;

const styles = StyleSheet.create({
	popup: {
		minHeight: 200 * vh,
		minWidth: 300 * vw,
		alignItems: 'center',
		padding: 5 * vh,
		borderRadius: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
	},
	buttonContainer: {
		flexDirection: 'row',
		padding: 15 * vh,
		marginBottom: 20 * vh,
		justifyContent: 'center',
	},
	errorIcon: {
		width: 82 * vw,
		height: 65 * vh,
		marginVertical: 20 * vh,
	},
	errorHeading: {
		fontSize: 18 * vh,
		fontWeight: 'bold',
		marginBottom: 20 * vh,
	},
	errorTxt: {
		fontSize: 15 * vh,
		color: '#464646',
		opacity: 0.5,
		marginBottom: 30 * vh,
		textAlign: 'center',
	},
	btnText: {
		fontSize: 12 * vh,
		color: '#FFFFFF',
		fontWeight: 'bold',
	},
	errorBtn: {
		height: 32 * vh,
		borderRadius: 5 * vh,
		letterSpacing: 0.26,
		marginRight: 20 * vh,
	},
});

export default styles;
