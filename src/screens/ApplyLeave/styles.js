import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DCE3F8',
    },
    dropdown: {
        width: 328 * vw,
        height: 74 * vh,
        borderRadius: 8 * vh,
        backgroundColor: '#FFFFFF',
        marginTop: 20 * vh,
        paddingHorizontal: 16 * vh,
    },
    icon: {
        marginRight: 10 * vw,
    },
    label: {
        position: 'absolute',
        left: 28 * vw,
        top: 25 * vh,
        zIndex: 999,
        paddingHorizontal: 5 * vh,
        marginBottom: 10 * vh,
        fontFamily: 'Karla-Regular',
    },
    halfDayLabel: {
        position: 'absolute',
        left: 16 * vw,
        top: 25 * vh,
        zIndex: 999,
        marginBottom: 10 * vh,
        fontFamily: 'Karla-Regular',
    },
    selectedTextStyle: {
        fontSize: 16 * vh,
        lineHeight: 24 * vh,
        color: '#949DB6',
        fontFamily: 'Karla-Regular',
    },
    iconStyle: {
        width: 70 * vw,
        height: 60 * vh,
    },
    inputSearchStyle: {
        height: 50 * vh,
    },
    descText: {
        fontFamily: 'Karla-Regular',
    },
    fromContainer: {
        flexDirection: 'row',
    },
    fromDateContainer: {
        width: '44%',
    },
    marginBtm: {
        marginTop: 0,
    },
    marginRgt: {
        marginRight: '2%',
    },
    startDate: {
        width: '44%',
        height: 74 * vh,
        borderRadius: 8 * vh,
        backgroundColor: '#FFFFFF',
        marginTop: 20 * vh,
        paddingHorizontal: 16 * vh,
        marginRight: '2%'
    },
    buttonStyle: {
        backgroundColor: '#e7ebf6',
        width: 30 * vw,
        height: 30 * vh,
        borderRadius: 8 * vh,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgStyle: {
        width: 30 * vw,
        height: 30 * vh,
    },
    buttonText: {
        fontSize: 14 * vh,
        lineHeight: 18 * vh,
        fontWeight: '700',
        fontFamily: 'Karla-Bold',
        textAlign: 'center',
    },
    button: {
        height: 42 * vh,
        width: 328 * vw,
        marginTop: 20 * vh,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },
});

export default styles;