import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import ViewPort from '../../constants/view-port';

const { vw, vh } = ViewPort;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: 296 * vw,
    height: 43 * vh,
    backgroundColor: colors.white,
    borderRadius: 8 * vw,
    borderColor: '#2C4DAE',
    borderWidth: 1 * vh,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 148 * vw,
    height: 41 * vh,
    borderRadius: 7 * vh,
    color: '#000000',
    backgroundColor: '#FFFFFF',
    borderColor: '#2C4DAE',
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  activebutton: {
    flex: 1,
    width: 148 * vw,
    height: 41 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C4DAE',
    borderRadius: 7 * vw,
  },
  activeLabel: {
    color: '#FFFFFF',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14 * vh,
    lineHeight: 22 * vh,
  },
  label: {
    color: '#000000',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14 * vh,
    lineHeight: 22 * vh,
  },
});

export default styles;
