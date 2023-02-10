import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  getInTouch: {
    fontFamily: 'Lato-Bold',
    fontSize: 16 * vh,
    lineHeight: 24 * vh,
    letterSpacing: 0.25 * vw,
    color: '#949DB6',
    marginBottom: 79 * vh,
    marginTop: 24 * vh,
    marginLeft: 19 * vh,
  },
  phoneWrapper: {
    width: 134 * vw,
    alignSelf: 'center',
  },
  innerWrapper: {
    flexDirection: 'row',
    marginBottom: 30 * vh,
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontSize: 14 * vh,
    lineHeight: 16.8 * vh,
    color: '#2C4DAE',
    marginRight: 15 * vw,
  },
  right: {
    marginRight: 21 * vw,
  },
});

export default styles;
