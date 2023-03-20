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
        bottom: 10 * vh,
        alignSelf: 'center',
    },
    btnText: {
        fontSize: 14 * vh,
        lineHeight: 18 * vh,
        fontFamily: 'Karla-Bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    btn: {
        height: 42 * vh,
        width: 146 * vw,
        marginTop: 10 * vh,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10 * vh,
    },
    takeMore: {
        backgroundColor: '#FFFFFF',
    },
    takeMoreText: {
        color: '#3C58B5',
    },
    capture: {
        width: 91 * vw,
        height: 91 * vh,
        borderRadius: 45 * vh,
        backgroundColor: colors.primary,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10 * vh,
    },
    captureText: {
        position: 'relative',
        paddingVertical: 35 * vh,
    },
    margin: {
        marginRight: 20 * vw,
    }
});

export default styles;