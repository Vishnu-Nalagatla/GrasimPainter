import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

import ViewPort from '../../../constants/view-port';
const {vw, vh} = ViewPort;

const styles = StyleSheet.create({
  popup: {
    minHeight: 600 * vh,
    minWidth: 900 * vw,
    maxWidth: '80%',
    alignItems: 'center',
    padding: 20 * vh,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 15 * vh,
    marginBottom: 20 * vh,
    justifyContent: 'center',
  },
  errorIcon: {
    width: 120 * vw,
    height: 120 * vh,
    marginVertical: 20 * vh,
  },
  errorHeading: {
    fontSize: 42 * vh,
    fontWeight: 'bold',
    marginBottom: 20 * vh,
  },
  errorTxt: {
    fontSize: 36 * vh,
    color: colors.error,
    marginBottom: 30 * vh,
    textAlign: 'center',
  },
  errorBtn: {
    height: 32 * vh,
    borderRadius: 5 * vh,
    letterSpacing: 0.26,
    marginRight: 20 * vh,
  },
  btnTxt: {
    fontSize: 42 * vh,
    color: colors.primary,
    letterSpacing: 0.8,
    fontWeight: '500',
    paddingHorizontal: 16 * vh,
  },

  button: {
    borderColor: colors.primary,
    minWidth: 300 * vw,
	// minHeight: 30 * vh,
    borderWidth: 2,
    // borderRadius: 20 * vh,
    // marginTop: 40 * vh,
    // backgroundColor: colors.white,
  },
});

export default styles;
