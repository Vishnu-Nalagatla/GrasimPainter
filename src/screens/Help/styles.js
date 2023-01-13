import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8E8E8',
    },
    textContainer: {
        width: '80%',
    },
    userText: {
        fontFamily: 'Karla',
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
        marginTop: 60 * vh,
        marginBottom: 100 * vh,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },
    goBack: {
        fontSize: 40 * vh,
        fontFamily: 'Karla',
        fontWeight: '700',
        textDecorationLine: 'underline',
        color: '#2C4DAE',
        lineHeight: 70 * vh,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    helpCenterText: {
        fontSize: 50 * vh,
        fontFamily: 'Lato',
        fontWeight: '700',
        textAlign: 'center',
        color: '#000000',
        letterSpacing: 1 * vw,
        marginBottom: 30 * vh,
    },
    supportIcon: {
        height: 100 * vh,
        width: 100 * vw,
        alignSelf: 'center',
        marginBottom: 200 * vh,
    },
});

export default styles;