import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
    buttonText: {
        color: '#52565F',
        fontSize: 45 * vh,
        fontWeight: '500',
        marginRight: 30 * vw,
    },
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 80 * vh,
        width: 350 * vw,
        height: 160 * vh,
        // position: 'absolute',
        // bottom: 400 * vh,
        // right: 100 * vw,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightArrowStyle: {
        width: 60 * vw,
        height: 60 * vh,
    },
    subtitleContainer: {
        position: "absolute",
        top: 1250 * vh,
    },
    sliderImage: {
        height: 300 * vh,
        width: "100%"
    },
    padding32: {
        paddingHorizontal: 150 * vw,
    },
    titleContainer: {
        position: "absolute",
        top: 500 * vh,
    },
    title: {
        fontSize: 50 * vh,
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Lato-Bold',
        lineHeight: 80 * vh,
    },
    descriptionText: {
        fontFamily: 'Karla-Regular',
        fontSize: 40 * vh,
        color: '#FFFFFF',
        paddingTop: 10 * vh,
        lineHeight: 60 * vh,
        textAlign: 'center',
    },
});

export default styles;