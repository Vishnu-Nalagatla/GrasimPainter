import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import colors from '../../../constants/colors';
import ViewPort from '../../../constants/view-port';
// import colors from '../../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 520 * vh,
    alignItems: 'flex-start',
    paddingLeft: 70 * vw,
    paddingRight: 50 * vw,
  },
  projectName: {
    fontSize: 34 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '700',
    paddingTop: 10 * vh,
  },
  header: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    height: 80 * vh,
  },
  ellipse: {
    height: 70 * vh,
    width: 70 * vh,
    marginRight: 20 * vw,
  },
  viewDetailsText: {
    fontSize: 34 * vh,
    color: '#2C4DAE',
    textDecorationLine: 'underline',
    fontWeight: '700',
  },
  leftWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  rightWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  staitLine: {
    backgroundColor: '#D0D7E8',
    height: 460 * vh,
    width: 12 * vw,
    position: 'absolute',
    left: 28 * vw,
    top: 68 * vh,
  },
  projectLine: {
    height: 300 * vh,
    position: 'relative',
  },
  bodyContainer: {
    marginLeft: 90 * vw,
    marginTop: 10 * vh,
    alignItems: 'flex-start',
    flex: 1,
    width: '100%',
  },
  status: {
    color: '#000000',
    fontSize: 40 * vh,
    fontWeight: '500',
    letterSpacing: 1 * vh,
  },
  date: {
    color: '#000000',
    fontSize: 30 * vh,
    fontWeight: '400',
    letterSpacing: 1 * vh,
    marginTop: 30 * vh,
  },
  buttonPrimary: {
    borderColor: colors.primary,
    color: colors.white,
    minWidth: 300 * vw,
    borderWidth: 2,
    borderRadius: 20 * vh,
    marginTop: 40 * vh,
    backgroundColor: colors.primary,
  },
  btnTxtPrimary: {
    fontSize: 36 * vh,
    color: colors.white,
    letterSpacing: 0.8,
    fontWeight: '500',
    paddingHorizontal: 16 * vh,
  },

  button: {
    borderColor: colors.primary,
    color: colors.primary,
    minWidth: 300 * vw,
    borderWidth: 2,
    borderRadius: 20 * vh,
    marginTop: 40 * vh,
    backgroundColor: colors.white,
  },
  buttonDisable: {
    borderColor: colors.primary,
    color: colors.primary,
    minWidth: 300 * vw,
    borderWidth: 2,
    borderRadius: 20 * vh,
    marginTop: 40 * vh,
    backgroundColor: colors.white,
    opacity: 0.6,
  },
  btnTxt: {
    fontSize: 36 * vh,
    color: colors.primary,
    letterSpacing: 0.8,
    fontWeight: '500',
    paddingHorizontal: 16 * vh,
  },

  cewCalendar: {
    flexDirection: 'row',
    marginTop: 26 * vh,
    marginBottom: 20 * vh,
  },
  viewCrewCalendar: {
    fontFamily: 'Karla',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 32 * vh,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  calendar: {
    height: 42 * vh,
    width: 42 * vh,
    marginRight: 20 * vw,
  },
  crewItem: {
    backgroundColor: colors.sliderTrack,
    paddingBottom: 30 * vh,
    paddingLeft: 20 * vh,
    // borderRadius: 10 * vh,
  },

  crewWrapper: {
    width: '46%',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  crewTitle: {
    fontSize: 38 * vh,
    color: colors.black,
    fontWeight: '700',

  },
  crewNames: {
    fontSize: 26 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '500',
    paddingHorizontal: 8 * vh,
  },
  selectedTextStyle: {
    fontSize: 40 * vh,
    color: colors.black,
    fontWeight: '700',
    paddingLeft: 26 * vh,
  },
  placeholderStyle: {
    // height: 150 * vh,
    // backgroundColor: 'green',
    justifyContent:'center',
    alignItems: 'center',
  },
  dropdown: {
    height: 120 * vh,
    marginTop: 30 * vh,
    width: '90%',
    marginRight: 20 * vh,
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
  },
  dropdownError: {
    height: 120 * vh,
    marginTop: 30 * vh,
    width: '94%',
    marginRight: 20 * vh,
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
    borderColor: 'red',
  },
  crewInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16 * vh,
  },
  crewStatus: {
    height: 26 * vh,
    width: 26 * vw,
    borderRadius: 13 * vh,
    backgroundColor: colors.error,
    marginLeft: 30 * vw,
  },
  successStatus: {
    height: 26 * vh,
    width: 26 * vw,
    borderRadius: 13 * vh,
    marginLeft: 30 * vw,
    backgroundColor: colors.success,
  },
});

export default styles;
