import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

import ViewPort from '../../../constants/view-port';
const { vw, vh } = ViewPort;

const styles = StyleSheet.create({
  popup: {
    height: 600 * vh,
    width: 340 * vw,
    alignItems: 'center',
    padding: 20 * vh,
    borderRadius: 8 * vh,
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
    width: 190 * vw,
    height: 190 * vh,
    marginVertical: 20 * vh,
  },
  errorHeading: {
    fontSize: 28 * vh,
    fontWeight: 'bold',
    marginBottom: 20 * vh,
    color: colors.black,
    fontFamily: 'Lato',
  },
  errorTxt: {
    fontSize: 16 * vh,
    marginBottom: 30 * vh,
    textAlign: 'center',
    color: colors.black,
    width: 264 * vw,
  },
  errorBtn: {
    height: 32 * vh,
    borderRadius: 5 * vh,
    letterSpacing: 0.26,
    marginRight: 20 * vh,
  },
  btnTxt: {
    fontSize: 16 * vh,
    color: colors.white,
    letterSpacing: 0.8,
    fontWeight: '500',
    paddingHorizontal: 16 * vh,
  },

  button: {
    borderColor: colors.primary,
    width: 296 * vw,
    borderWidth: 2,
    marginTop: 40 * vh,
    backgroundColor: colors.primary,
  },
});

export default styles;
