import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const { vh } = ViewPort;

const styles = StyleSheet.create({
	container: { alignSelf: 'center', backgroundColor: colors.primary, justifyContent: 'center' },
	text: { color: 'white', fontSize: 16 * vh },
	buttonDisabled: { opacity: 0.6 },
});

export default styles;
