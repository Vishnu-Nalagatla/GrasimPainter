import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E8E8E8',
    },
    inputWrapper: {
        width: '80%',
    },
    userName: {
        width: '100%',
        height: 120 * vh,
        borderRadius: 2,
        backgroundColor: '#DCE3F8',
        borderWidth: 0.1,
        textAlign: 'center',
        alignContent: 'center',
        fontFamily: 'Lato-Regular',
        fontSize: 35 * vh,
        fontWeight: '400',
        marginTop: 50 * vh,
        padding: 30 * vh,
        color: '#949DB6',
    },
    userText: {
        fontFamily: 'Karla-Regular',
        fontSize: 40 * vh,
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: 70 * vh,
    },
    nextBtnText: {
        fontSize: 40 * vh,
    },
    nextBtn: {
        height: 130 * vh,
        width: '100%',
        marginTop: 50 * vh,
        marginBottom: 40 * vh,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 300 * vh,
        marginBottom: 200 * vh,
    },
    paintIcon: {
        height: 251 * vh,
        width: 251 * vw,
    },
    starIcon: {
        width: 180 * vw,
        height: 180 * vh,
        position: 'absolute',
        left: '16%',
        top: '34%',
    },
    helpText: {
        fontSize: 35 * vh,
        position: 'absolute',
        bottom: 60 * vh,
        fontFamily: 'Karla-Bold',
        fontWeight: '700',
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#2C4DAE',
    },
    errorText: {
        fontSize: 35 * vh,
        color: '#F36C7C',
        marginTop: 15 * vh,
    },
    errorBorder: {
        borderColor: '#F36C7C',
    },
    underlineStyleBase: {
        width: 150 * vw,
        height: 200 * vh,
        borderWidth: 0.1,
        borderRadius: 8,
        borderColor: '#DCE3F8',
        color: '#000000',
        fontSize: 60 * vh,
        fontWeight: '700',
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
    otpInput: { width: '80%', height: '20%', marginVertical: 40 * vh, alignSelf: 'center' },
    resendOtp: {
        fontSize: 40 * vh,
        fontFamily: 'Karla-Regular',
        fontWeight: '400',
        textDecorationLine: 'underline',
        color: '#2C4DAE',
        lineHeight: 70 * vh,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default styles;