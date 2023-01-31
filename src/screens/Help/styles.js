import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
    },
    helpCenterText: {
        marginTop: 200 * vh,
        fontFamily: 'Lato-Bold',
        fontSize: 16 * vh,
        lineHeight: 24 * vh,
        textAlign: 'center',
        letterSpacing: 0.25 * vw,
        color: '#000000',
    },
    supportIcon: {
        height: 24 * vh,
        width: 24 * vw,
        alignSelf: 'center',
        marginTop: 6 * vh,
    },
    userText: {
        marginTop: 78 * vh,
        width: 296 * vw,
        height: 44 * vh,
        fontFamily: 'Karla-Regular',
        fontSize: 14 * vh,
        lineHeight: 22 * vh,
        textAlign: 'center',
        color: '#000000',
        opacity: 0.6,
        alignSelf: 'center',
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
        marginTop: 78 * vh,
        marginRight: 5 * vw,
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