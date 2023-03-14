import {StyleSheet, Platform} from 'react-native';
import colors from '../../constants/colors';
import ViewPort from '../../constants/view-port';
const {vw, vh} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16 * vh,
    paddingHorizontal: 10 * vh,
    paddingVertical: 10 * vh,
    left: 0,
    backgroundColor: '#2C4DAE',
  },
  initContainer: {
    flexDirection: 'row',
    marginLeft: 16 * vw,
    alignItems: 'center',
    paddingVertical: 20 * vh,
  },
  hrLine: {
    borderColor: colors.sliderTrack,
    borderBottomWidth: 1 * vh,
    width: 238 * vw,
    marginLeft: 16 * vw,
    marginBottom: 42 * vh,
  },
  initalsWrapper: {
    width: 50 * vh,
    height: 50 * vh,
    borderRadius: 25 * vh,
    marginRight: 12 * vw,
    backgroundColor: '#399555',
    justifyContent: 'center',
  },
  initialsText: {
    fontSize: 24 * vh,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
  },
  name: {
    fontSize: 12 * vh,
    fontStyle: 'normal',
    // textAlign: 'center',
    fontWeight: '700',
    color: colors.white,
  },
  phone: {
    fontSize: 12 * vh,
    textAlign: 'center',
    color: colors.white,
  },

  langPrefWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5 * vh,
  },
  langIcon: {
    height: Platform.OS === 'ios' ? 24 * vh : 27 * vh,
    marginRight: 10 * vh,
  },
  langPrefText: {color: '#000', fontSize: 14 * vh},
  prefIcon: {fontSize: 20 * vh, color: '#000'},
  radio: {marginRight: 10 * vh, marginBottom: 5 * vh, fontSize: 10 * vh},
  iosRadio: {fontSize: 20 * vh},
  langLabel: {fontSize: 14 * vh},
  logout: {
    fontSize: 16 * vh,
    textAlign: 'center',
    color: '#C11111',
    textDecorationLine: 'underline',
    textDecorationColor: '#C11111',
  },

  rowCenter: {flexDirection: 'row', alignItems: 'center'},
  resetPasswordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10 * vh,
  },
  resetPasswordIcon: {width: 20 * vh, height: 20 * vh, marginRight: 5 * vh},

  profileIcon: {
    width: 56 * vw,
    height: 56 * vh,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 34 * vh,
    marginLeft: 16 * vw,
  },
  itemText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14 * vh,
    lineHeight: 22 * vh,
    letterSpacing: 0.25 * vw,
    color: '#FFFFFF',
  },
  itemIconStyle: {
    width: 24 * vw,
    height: 24 * vh,
    marginRight: 16 * vw,
  },
  closeImg: {
    width: 24 * vw,
    height: 24 * vh,
    margin: 16 * vw,
  },
  logoutText: {
    color: '#91A9F9',
  },
  logoutWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 34 * vh,
    left: 24 * vw,
    position: 'absolute',
    bottom: 29 * vh,
  },
  logoutIcon: {height: 27 * vh, width: 29 * vw, marginRight: 16 * vw},
});

export default styles;
