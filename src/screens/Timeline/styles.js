import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7ebf6',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: 328 * vw,
    borderRadius: 8 * vw,
    marginBottom: 10 * vh,
    marginTop: 20 * vh,
    paddingLeft: 16 * vw,
  },
  heading: {
    fontFamily: 'Lato-Bold',
    fontSize: 16 * vh,
    lineHeight: 24 * vh,
    marginTop: 16 * vh,
    marginBottom: 24 * vh,
    color: '#000000',
    opacity: 0.6,
    letterSpacing: 0.25 * vw,
  },
  roomHeading: {
    marginLeft: 16 * vw,
  },
  noMargin: {
    marginTop: 0,
    marginBottom: 0,
  },
  ellipse: {
    height: 24 * vh,
    width: 24 * vh,
  },
  straightLine: {
    backgroundColor: '#D0D7E8',
    height: 60 * vh,
    width: 3 * vw,
    marginLeft: 10 * vw,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    width: 295 * vw,
  },
  hamburgerContainer: {
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
  },
  startDate: {
    fontFamily: 'Karla-Bold',
    fontSize: 14 * vh,
    color: '#000000',
    opacity: 0.6,
    letterSpacing: 0.15 * vw,
  },
  dateContainer: {
    flexDirection: 'row',
    marginTop: 14 * vh,
    marginLeft: 16 * vw,
    alignItems: 'center',
  },
  flagImg: {
    height: 16 * vh,
    width: 16 * vh,
    marginRight: 10 * vw,
  },
  buttonText: {
    fontSize: 16 * vh,
    fontFamily: 'Karla-Bold',
    textAlign: 'center',
  },
  button: {
    height: 42 * vh,
    width: 328 * vw,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 20 * vh,
  },
  recalculateButton: {
    height: 42 * vh,
    width: 290 * vw,
    alignSelf: 'center',
    borderRadius: 8,
    position: 'absolute',
    bottom: 10 * vh,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#2C4DAE',
  },
  recalculateButtonText: {
    color: '#2C4DAE',
    fontSize: 14 * vh,
    lineHeight: 18 * vh,
    fontFamily: 'Karla-Bold',
    textAlign: 'center',
  },
  listStyle: {
    width: 328 * vw,
    height: 380 * vh,
  },
  highlight: {
    color: '#2C4DAE',
    fontSize: 16 * vh,
    textDecorationLine: 'underline',
  },
  buttonStyle: {
    backgroundColor: '#e7ebf6',
    width: 24 * vw,
    height: 24 * vh,
    borderRadius: 10 * vh,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: 24 * vw,
    height: 24 * vh,
  },
  textStyle: {
    fontSize: 14 * vh,
    lineHeight: 24 * vh,
    color: '#000000',
    fontFamily: 'Karla-Bold',
  },
  calendarStyle: {
    height: 324 * vh,
    padding: 16 * vh,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10 * vh,
  },
  callButton: {
    width: 156 * vw,
    height: 42 * vh,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#2C4DAE',
    marginRight: 10 * vw,
  },
  updateButton: {
    width: 156 * vw,
    height: 42 * vh,
    borderRadius: 8,
    backgroundColor: '#2C4DAE',
    borderWidth: 1,
    borderColor: '#2C4DAE',
  },
});

export default styles;
