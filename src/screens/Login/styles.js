import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
    },
    innerContainer: {
        backgroundColor: '#E8E8E8',
    },
    inputWrapper: {
        width: 296 * vw,
        alignSelf: 'center'
    },
    input: {
        width: 296 * vw,
        height: 48 * vh,
        padding: 13 * vw,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F8FF',
        borderWidth: 0.1,
        borderColor: '#DCE3F8',
        textAlign: 'center',
        fontSize: 14 * vh,
        fontFamily: 'Lato-Regular',
        lineHeight: 21 * vh,
        letterSpacing: 0.15 * vw,
        color: '#949DB6',
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
        marginTop: 24 * vh,
    },
    paintIcon: {
        height: 132 * vh,
        width: 177 * vw,
        marginTop: 112 * vh,
        alignSelf: 'center',
        marginBottom: 81 * vh,
    },
    helpText: {
        fontSize: 14 * vh,
        lineHeight: 18 * vh,
        fontFamily: 'Karla-Bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#2C4DAE',
        marginTop: 240 * vh,
    },
    errorText: {
        marginTop: 4 * vh,
        fontSize: 12 * vh,
        fontFamily: 'Karla-Bold',
        lineHeight: 18 * vh,
        color: '#F36C7C',
    },
    errorBorder: {
        borderColor: '#F36C7C',
    }
});

export default styles;