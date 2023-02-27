import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import ViewPort from '../../constants/view-port';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#DCE3F8',
  },
  dropdown: {
    width: 328 * vw,
    height: 74 * vh,
    borderRadius: 8 * vh,
    backgroundColor: '#FFFFFF',
    marginTop: 20 * vh,
    paddingHorizontal: 16 * vh,
  },
  icon: {
    marginRight: 10 * vw,
  },
  label: {
    position: 'absolute',
    left: 28 * vw,
    top: 25 * vh,
    zIndex: 999,
    paddingHorizontal: 5 * vh,
    marginBottom: 10 * vh,
    fontFamily: 'Karla-Regular',
  },
  halfDayLabel: {
    position: 'absolute',
    left: 16 * vw,
    top: 25 * vh,
    zIndex: 999,
    marginBottom: 10 * vh,
    fontFamily: 'Karla-Regular',
  },
  selectedTextStyle: {
    fontSize: 16 * vh,
    lineHeight: 24 * vh,
    color: '#949DB6',
    fontFamily: 'Karla-Regular',
  },
  iconStyle: {
    width: 70 * vw,
    height: 60 * vh,
  },
  inputSearchStyle: {
    height: 50 * vh,
  },
  descText: {
    fontFamily: 'Karla-Regular',
  },
  fromContainer: {
    flexDirection: 'row',
  },
  fromDateContainer: {
    width: '44%',
  },
  marginBtm: {
    marginTop: 0 * vh,
  },
  marginRgt: {
    marginRight: '2%',
  },
  startDate: {
    width: '44%',
    height: 74 * vh,
    borderRadius: 8 * vh,
    backgroundColor: '#FFFFFF',
    marginTop: 20 * vh,
    paddingHorizontal: 16 * vh,
    marginRight: '2%',
  },
  buttonStyle: {
    backgroundColor: '#e7ebf6',
    width: 24 * vw,
    height: 24 * vh,
    borderRadius: 8 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16 * vw,
  },
  imgStyle: {
    width: 24 * vw,
    height: 24 * vh,
  },
  buttonText: {
    fontSize: 14 * vh,
    lineHeight: 18 * vh,
    fontWeight: '700',
    fontFamily: 'Karla-Bold',
    textAlign: 'center',
  },
  button: {
    height: 42 * vh,
    width: 328 * vw,
    marginTop: 20 * vh,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  calendarStyle: {
    height: 324 * vh,
    padding: 16 * vh,
  },
  textStyle: {
    fontSize: 14 * vh,
    lineHeight: 24 * vh,
    color: '#000000',
    fontFamily: 'Karla-Bold',
  },
  showFromDayCalendar: {
    backgroundColor: colors.white,
    width: 328 * vw,
    height: 324 * vh,
    borderRadius: 8 * vh,
    marginTop: 12 * vh,
  },
  imgLeaveSuccessStyle: {
    width: 64 * vw,
    height: 64 * vh,
  },
  leaveSuccessLabel: {
    color: '#000000',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14 * vh,
    lineHeight: 22 * vh,
    paddingLeft: 48 * vh,
    paddingRight: 48 * vh,
  },
});

export default styles;
