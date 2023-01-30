import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import colors from '../../../constants/colors';
import ViewPort from '../../../constants/view-port';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: 16 * vw,
    position: 'relative',
  },
  projectName: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    marginRight: 0 * vw,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ellipse: {
    height: 24 * vh,
    width: 24 * vw,
  },
  viewDetailsText: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  leftWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  rightWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  sraitLine: {
    flex: 1,
    backgroundColor: colors.disabledButton,
    height: '88%',
    width: 4 * vw,
    position: 'absolute',
    left: 10 * vw,
    top: 22 * vh,
    overflow: 'hidden',
  },
  projectLine: {
    position: 'relative',
    marginRight: 12 * vw,
  },
  bodyContainer: {
    marginLeft: 34 * vw,
    alignItems: 'flex-start',
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  status: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14 * vh,
    lineHeight: 22 * vh,
    color: colors.black,
    letterSpacing: 1 * vh,
  },
  date: {
    color: colors.black,
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10 * vh,
    lineHeight: 12 * vh,
    letterSpacing: 1 * vh,
    marginTop: 8 * vh,
  },
  callNumer: {
    color: colors.black,
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10 * vh,
    lineHeight: 12 * vh,
    letterSpacing: 1 * vh,
    marginTop: 8 * vh,
  },
  buttonPrimary: {
    borderColor: colors.primary,
    color: colors.white,
    minWidth: 118 * vw,
    borderWidth: 2,
    borderRadius: 8 * vh,
    backgroundColor: colors.primary,
  },
  btnTxtPrimary: {
    fontSize: 12 * vh,
    color: colors.white,
    letterSpacing: 0.8,
    fontWeight: '500',
    paddingHorizontal: 16 * vh,
  },

  button: {
    borderColor: colors.primary,
    color: colors.primary,
    minWidth: 124 * vw,
    borderWidth: 2,
    borderRadius: 8 * vh,
    marginTop: 12 * vh,
    backgroundColor: colors.white,
    marginBottom: 30 * vh,
  },
  buttonDisable: {
    borderColor: colors.primary,
    color: colors.primary,
    minWidth: 300 * vw,
    borderWidth: 2,
    borderRadius: 8 * vh,
    marginTop: 12 * vh,
    backgroundColor: colors.white,
    opacity: 0.6,
  },
  btnTxt: {
    fontSize: 12 * vh,
    color: colors.primary,
    letterSpacing: 0.8,
    fontWeight: '500',
    paddingHorizontal: 16 * vh,
  },

  cewCalendar: {
    flexDirection: 'row',
    marginTop: 16 * vh,
    marginBottom: 20 * vh,
  },
  viewCrewCalendar: {
    fontFamily: 'Karla',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 14 * vh,
    lineHeight: 18 * vh,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  calendar: {
    height: 14 * vh,
    width: 14 * vw,
    marginRight: 7 * vw,
  },
 
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  selectedTextStyle: {
    fontSize: 12 * vh,
    color: colors.black,
    fontWeight: '700',
    paddingLeft: 26 * vh,
  },
  placeholderStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    height: 42 * vh,
    width: 130 * vw,
    marginRight: 12 * vh,
    backgroundColor: colors.sliderTrack,
    borderRadius: 8 * vh,
    padding: 8 * vh,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  dropdownError: {
    height: 42 * vh,
    width: 130 * vw,
    marginRight: 12 * vh,
    backgroundColor: colors.sliderTrack,
    borderRadius: 12 * vh,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderWidth: 1,
    marginBottom: 30 * vh,
  },
  crewInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4 * vh,
  },
  crewItem: {
    backgroundColor: colors.sliderTrack,
    paddingBottom: 12 * vh,
    paddingLeft: 12 * vh,
    paddingTop: 8 * vh,
  },
  crewWrapper: {
    marginBottom: 30 * vh,
  },
  crewTitle: {
    fontSize: 12 * vh,
    color: colors.black,
    fontWeight: '700',
  },
  crewNames: {
    fontSize: 10 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '500',
  },
  crewStatus: {
    height: 8 * vh,
    width: 8 * vw,
    borderRadius: 13 * vh,
    backgroundColor: colors.error,
    marginLeft: 30 * vw,
  },
  successStatus: {
    height: 8 * vh,
    width: 8 * vw,
    borderRadius: 13 * vh,
    marginLeft: 10 * vw,
    backgroundColor: colors.success,
  },
});

export default styles;
