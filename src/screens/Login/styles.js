import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

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
    input: {
        width: '100%',
        height: 130 * vh,
        borderWidth: 0.1,
        borderColor: '#DCE3F8',
        borderRadius: 8,
        backgroundColor: '#F5F8FF',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40 * vh,
    },
    nextBtnText: {
        fontSize: 40 * vh,
    },
    nextBtn: {
        height: 130 * vh,
        width: '100%',
        marginTop: 50 * vh,
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
    }
});

export default styles;