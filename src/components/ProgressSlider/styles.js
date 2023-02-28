import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbTouchSize: {
    width: 6 * vw,
    height: 6 * vh,
  },
  textValue: {
    width: 70 * vw,
    height: 20 * vh,
    textAlign: 'center',
    color: colors.primary,
    fontSize: 16 * vh,
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    paddingTop: 3 * vh,
  },
  thumbStyle: {
    height: 7 * vh,
  },
  trackStyle: {
    height: 4 * vh,
  },
  slider: {
    height: 60 * vh,
    backgroundColor: 'red',
  },
});

export default styles;
