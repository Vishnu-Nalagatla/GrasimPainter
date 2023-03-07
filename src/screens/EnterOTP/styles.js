import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import ViewPort from '../../constants/view-port';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7EBF6',
    },
    otpWrapper: {
        width: 328 * vw,
        height: 230 * vh,
        borderRadius: 8 * vh,
        backgroundColor: colors.white,
        marginLeft: 16 * vw,
        marginTop: 24 * vh,
        backgroundColor: '#FFFFFF',
    },
    enterOTP: {
        fontFamily: 'Lato-Bold',
        fontSize: 16 * vh,
        lineHeight: 24 * vh,
        textAlign: 'center',
        letterSpacing: 0.25 * vw,
        color: '#000000',
        marginTop: 16 * vh,
        marginBottom: 26 * vh,
    },
    supportIcon: {
        height: 24 * vh,
        width: 24 * vw,
        alignSelf: 'center',
        marginTop: 6 * vh,
    },
    otpInput: {
        width: '80%',
        height: '20%',
        marginTop: 5 * vh,
        alignSelf: 'center',
        color: '#000000',
    },
    underlineStyleBase: {
        width: 52 * vw,
        height: 44 * vh,
        borderWidth: 0,
        borderBottomWidth: 1.5,
        borderBottomColor: '#000000',
        color: '#000000',
        fontSize: 20 * vh,
        fontFamily: 'Lato',
        fontWeight: '700',
        lineHeight: 24 * vh,
        fontStyle: 'nornmal',
    },
    errorField: {
        borderColor: '#F36C7C',
        borderWidth: 1.5,
    },
    underlineStyleHighLighted: {
        borderBottomWidth: 1.5,
        borderBottomColor: '#2C4DAE',
    },

    button: {
        borderColor: '#2C4DAE',
        width: 296 * vw,
        height: 42 * vh,
        borderWidth: 2,
        borderRadius: 8 * vh,
        marginTop: 50 * vh,
        marginBottom: 16 * vh,
        alignSelf: 'center',
    },
    btnTxt: {
        fontSize: 16 * vh,
        fontFamily: 'karla',
        letterSpacing: 0.8,
        fontWeight: '700',
        paddingHorizontal: 16 * vh,
    },
});

export default styles;