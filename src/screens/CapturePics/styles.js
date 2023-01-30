import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 30 * vh,
        alignSelf: 'center',
    },
    btnText: {
        fontSize: 40 * vh,
        fontFamily: 'Karla-Regular',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    btn: {
        height: 130 * vh,
        width: '43%',
        marginTop: 50 * vh,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },
    capture: {
        width: 250 * vw,
        height: 250 * vh,
        borderRadius: 250 * vh,
        backgroundColor: colors.primary,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 100 * vh,
    },
    captureText: {
        position: 'relative',
        paddingVertical: 90 * vh, 
    }
});

export default styles;