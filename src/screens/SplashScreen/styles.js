import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: colors.primary,
    },
    paintIcon: {
        height: 251 * vh,
        width: 251 * vw
    },
    starIcon: {
        width: 131 * vw,
        height: 131 * vh,
        position: 'absolute',
        left: '53%',
        top: '50%',
    },
    paintCraftIcon: {
        width: 56.19 * vw,
        height: 12.46 * vh,
        marginTop: 60 * vh,
    },
    painterIcon: {
        width: 56.19 * vw,
        height: 12.46 * vh,
        marginTop: 30 * vh,
    },
});

export default styles;