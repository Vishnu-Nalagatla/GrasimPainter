import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7ebf6',
        alignItems: 'center',
    },
    innerContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        width: '90%',
        alignItems: 'flex-start',
        borderRadius: 20 * vw,
        marginBottom: 60 * vh,
        marginTop: 60 * vh,
        paddingLeft: 40 * vw,
    },
    heading: {
        fontFamily: 'Lato',
        fontSize: 47 * vh,
        fontWeight: '700',
        marginTop: 50 * vh,
        marginBottom: 50 * vh,
        color: '#000000',
        opacity: 0.6,
        letterSpacing: 1 * vw,
    },
    noMargin: {
        marginTop: 0,
        marginBottom: 0,
    },
    ellipse: {
        height: 70 * vh,
        width: 70 * vh,
        marginRight: 20 * vw,
    },
    straightLine: {
        backgroundColor: '#D0D7E8',
        height: 140 * vh,
        width: 12 * vw,
        position: 'absolute',
        left: 28 * vw,
        top: 68 * vh,
    },
    projectLine: {
        // height: 0 * vh,
        // position: 'relative',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        paddingVertical: 20 * vh,
        marginHorizontal: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
        width: '90%',
    },
    hamburgerContainer: {
        justifyContent: 'center'
    },
    textContainer: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 20 * vw,
    },
    startDate: {
        fontFamily: 'Karla',
        fontSize: 30 * vh,
        fontWeight: '700',
        color: '#000000',
        opacity: 0.6,
        letterSpacing: 1 * vw,
    },
    dateContainer: {
        flexDirection: 'row',
        marginTop: 30 * vh,
        alignItems: 'center',
    },
    flagImg: {
        height: 30 * vh,
        width: 30 * vh,
        marginRight: 20 * vw,
    },
    buttonText: {
        fontSize: 50 * vh,
        fontWeight: '700',
        fontFamily: 'Karla',
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
    listStyle: {
        height: '80%',
    },
    highlight: {
        fontColor: '#2C4DAE',
        fontSize: 35 * vh,
        textDecorationLine: 'underline',
    }
});

export default styles;