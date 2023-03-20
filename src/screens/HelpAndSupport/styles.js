import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import ViewPort from '../../constants/view-port';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 31 * vh,
    },
    getInTouch: {
        marginTop: 24 * vh,
        marginLeft: 19 * vw,
        fontFamily: 'Lato-Bold',
        fontSize: 16 * vh,
        letterSpacing: 0.25 * vw,
        color: '#949DB6',
        marginBottom: 79 * vh,
    },
    supportIcon: {
        height: 24 * vh,
        width: 24 * vw,
        alignSelf: 'center',
        marginTop: 6 * vh,
    },
    userText: {
        marginRight: 15 * vw,
        fontFamily: 'Lato',
        fontSize: 14 * vh,
        lineHeight: 17 * vh,
        textAlign: 'center',
        color: colors.primary,
        alignSelf: 'center',
        fontWeight: '500',
    },
    nextBtn: {
        width: 292 * vw,
        height: 48 * vh,
        padding: 13 * vw,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3C58B5',
        borderRadius: 8 * vw,
        marginTop: 24 * vh,
    },
    nextBtnText: {
        fontSize: 14 * vh,
        fontFamily: 'Lato-Regular',
        lineHeight: 16.8 * vh,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    arrowIcon: {
        height: 24 * vh,
        width: 24 * vw,
    },
    goBack: {
        fontFamily: 'Karla-Bold',
        fontSize: 14 * vh,
        lineHeight: 18 * vh,
        textAlign: 'center',
        color: '#2C4DAE',
        textDecorationLine: 'underline',
        marginTop: 78 * vh,
    }

});

export default styles;