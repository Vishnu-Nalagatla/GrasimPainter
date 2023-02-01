import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
    },
    innerContainer: {
        backgroundColor: '#E8E8E8',
    },
    paintIcon: {
        height: 132 * vh,
        width: 177 * vw,
        marginTop: 112 * vh,
        alignSelf: 'center',
    },
    inputWrapper: {
        width: 296 * vw,
        alignSelf: 'center'
    },
    userText: {
        marginTop: 16 * vh,
        width: '70%',
        height: 44 * vh,
        fontFamily: 'Karla-Regular',
        fontSize: 14 * vh,
        lineHeight: 22 * vh,
        textAlign: 'center',
        color: '#000000',
        opacity: 0.6,
        alignSelf: 'center',
    },
    userName: {
        width: '100%',
        height: 48 * vh,
        marginTop: 21 * vh,
        borderRadius: 8 * vw,
        padding: 13 * vw,
        backgroundColor: '#DCE3F8',
        textAlign: 'center',
    },
    otpInput: {
        width: '80%', height: '20%', marginTop: 5 * vh, alignSelf: 'center'
    },
    errorText: {
        marginTop: 16 * vh,
        fontSize: 12 * vh,
        fontFamily: 'Karla-Bold',
        lineHeight: 18 * vh,
        color: '#F36C7C',
    },
    nextBtnText: {
        fontSize: 14 * vh,
        fontFamily: 'Lato-Regular',
        lineHeight: 16.8 * vh,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    nextBtn: {
        width: 296 * vw,
        height: 48 * vh,
        padding: 13 * vw,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3C58B5',
        borderRadius: 8 * vw,
        marginTop: 16 * vh,
    },
    underlineStyleBase: {
        width: 52 * vw,
        height: 64 * vh,
        borderWidth: 0.1,
        borderRadius: 8,
        borderColor: '#DCE3F8',
        color: '#000000',
        opacity: 0.6,
        fontSize: 20 * vh,
        fontFamily: 'Lato-Bold',
        lineHeight: 24 * vh,
        backgroundColor: '#FFFFFF',
    },
    errorField: {
        borderColor: '#F36C7C',
        borderWidth: 1.5,
    },
    underlineStyleHighLighted: {
        borderWidth: 1.5,
        borderColor: '#2C4DAE',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    resendText: {
        marginTop: 24 * vh,
        width: 296 * vw,
        height: 22 * vh,
        fontFamily: 'Karla-Regular',
        fontSize: 14 * vh,
        lineHeight: 22 * vh,
        textAlign: 'center',
        color: '#000000',
        opacity: 0.6,
        alignSelf: 'center',
    },
    resendOtpText: {
        height: 18 * vh,
        fontSize: 12 * vh,
        fontFamily: 'Karla-Bold',
        marginTop: 51 * vh,
    },
    resendOtp: {
        textDecorationLine: 'underline',
        color: '#2C4DAE',
    },
    helpText: {
        fontSize: 14 * vh,
        lineHeight: 18 * vh,
        fontFamily: 'Karla-Bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#2C4DAE',
        marginTop: 80 * vh,
    },
});

export default styles;