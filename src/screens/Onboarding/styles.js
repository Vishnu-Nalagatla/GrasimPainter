import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
    userText: {
        fontFamily: 'Lato-Bold',
        fontSize: 16 * vh,
        lineHeight: 24 * vh,
        textAlign: 'center',
        color: '#FFFFFF',
        alignSelf: 'center',
    },
    descriptionText: {
        fontFamily: 'Karla-Regular',
        fontSize: 14 * vh,
        lineHeight: 22 * vh,
        textAlign: 'center',
        color: '#FFFFFF',
        alignSelf: 'center',
    },
    sliderImage: {
        height: 92 * vh,
        width: 143 * vw,
    },
    rightArrowStyle: {
        width: 24 * vw,
        height: 24 * vh,
    },
    titleContainer: {
        position: 'absolute',
        top: 140 * vh,
        width: 244 * vw,
        height: 44 * vh,
    },
    subtitleContainer: {
        width: 244 * vw,
        height: 44 * vh,
        position: 'absolute',
        top: 430 * vh
    },
    buttonText: {
        color: '#52565F',
        fontFamily: 'Karla-Bold',
        fontSize: 16 * vh,
        lineHeight: 24 * vh,
        marginRight: 10 * vw,
    },
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 38 * vw,
        width: 148 * vw,
        height: 55 * vh,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default styles;