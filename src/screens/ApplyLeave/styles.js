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
        width: '90%',
        height: 220 * vh,
        borderRadius: 15 * vh,
        backgroundColor: '#FFFFFF',
        marginTop: 50 * vh,
        paddingHorizontal: 30 * vh,
    },
    icon: {
        marginRight: 30 * vw,
    },
    label: {
        position: 'absolute',
        left: '6%',
        top: 60 * vh,
        zIndex: 999,
        paddingHorizontal: 20 * vh,
        fontFamily: 'Karla-Regular',
    },
    selectedTextStyle: {
        fontSize: 40 * vh,
        color: '#949DB6',
        fontFamily: 'Lato-Regular',
        fontWeight: '400',
    },
    iconStyle: {
        width: 70 * vw,
        height: 60 * vh,
    },
    inputSearchStyle: {
        height: 120 * vh,
    },
    descText: {
        marginTop: 20 * vh,
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
        paddingVertical: 15 * vh,
    },
    marginRgt: {
        marginRight: '2%',
    },
    startDate: {
        width: '44%',
        height: 220 * vh,
        borderRadius: 15 * vh,
        backgroundColor: '#FFFFFF',
        marginTop: 50 * vh,
        paddingHorizontal: 30 * vh,
        marginRight: '2%'
    },
    buttonStyle: {
        backgroundColor: '#e7ebf6',
        width: 80 * vw,
        height: 80 * vh,
        borderRadius: 10 * vh,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgStyle: {
        width: 60 * vw,
        height: 60 * vh,
    },
    buttonText: {
        fontSize: 50 * vh,
        fontWeight: '700',
        fontFamily: 'Karla-Bold',
        textAlign: 'center',
    },
    button: {
        height: 130 * vh,
        width: '90%',
        marginTop: 40 * vh,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        marginBottom: 20 * vh,
    },
});

export default styles;