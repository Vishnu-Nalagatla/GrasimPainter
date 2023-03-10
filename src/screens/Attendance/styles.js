import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.sliderTrack,
  },
  header: {
    width: 360 * vw,
    justifyContent: 'flex-end',
    marginTop: 12 * vh,
    flexDirection: 'row',
  },
  leaveRequestlabel: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14 * vh,
    lineHeight: 18 * vh,
    color: colors.primary,
    letterSpacing: 0.6,
    textDecorationLine: 'underline',
    paddingRight: 5 * vh,
  },
  leaveRequestCount: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 10 * vh,
    color: colors.white,
    height: 16 * vh,
    width: 16 * vw,
    borderRadius: 8 * vh,
    backgroundColor: colors.error,
    textAlign: 'center',
    marginRight: 16 * vw,
  },
  date: {
    marginTop: 58 * vh,
    color: colors.mediumShadeOfBlue,
    fontWeight: '500',
    fontSize: 20 * vh,
    marginBottom: 40 * vh,
  },
  attendance: {
    width: 256 * vw,
    height: 84 * vh,
    backgroundColor: colors.lavenderMist,
    borderRadius: 42 * vh,
    borderColor: colors.primary,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  attendanceMarked: {
    width: 170 * vw,
    height: 84 * vh,
    backgroundColor: colors.lavenderMist,
    borderRadius: 42 * vh,
    borderColor: colors.primary,
    borderWidth: 1,
    flexDirection: 'row',
    opacity: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  attendanceLabel: {
    fontSize: 20 * vh,
    color: colors.primary,
    fontWeight: '500',
  },
  flagImg: {
    height: 32 * vh,
    width: 28 * vw,
    marginRight: 17 * vh,
  },
  applyImg: {
    height: 42 * vh,
    width: 60 * vw,
  },
  leavesLabel: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    // width: '100%',
    // paddingLeft: 16 * vh,
    marginTop: 39 * vh,
    fontSize: 16 * vh,
    color: colors.black,
    textAlign: 'left',
    fontWeight: '700',
  },
  balanceLabel: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    marginTop: 39 * vh,
    fontSize: 12 * vh,
    color: colors.black,
    textAlign: 'left',
    fontWeight: '600',
    marginRight: 12 * vw,
  },
  allLabel: {
    width: 84 * vw,
    height: 42 * vh,
    borderRadius: 8 * vh,
    backgroundColor: colors.primary,
    color: colors.white,
    textAlign: 'center',
    paddingTop: 12 * vh,
  },
  balanceRow: {
    flexDirection: 'row',
  },
  leaceRow: {
    width: 328 * vw,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16 * vh,
  },
  leavesWrapper: {
    width: '100%',
  },
  leaveCard: {
    width: 328 * vw,
    // justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginBottom: 16 * vh,
    borderRadius: 8 * vh,
    // padding: 50 * vh,
  },
  leavesHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  leavesBottom: {},
  approved: {
    fontSize: 12 * vh,
    fontWeight: '500',
    borderRadius: 8 * vh,
    backgroundColor: colors.success,
    color: colors.white,
    paddingVertical: 2 * vh,
    paddingHorizontal: 4 * vw,
    marginRight: 12 * vw,
    marginTop: 12 * vh,
  },
  declined: {
    fontSize: 12 * vh,
    fontWeight: '500',
    borderRadius: 8 * vh,
    backgroundColor: colors.error,
    color: colors.white,
    paddingVertical: 2 * vh,
    paddingHorizontal: 4 * vw,
    marginRight: 12 * vw,
    marginTop: 12 * vh,
  },
  duration: {
    fontSize: 12 * vh,
    paddingLeft: 12 * vw,
    paddingTop: 12 * vh,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  dateRange: {
    fontSize: 14 * vh,
    paddingLeft: 12 * vw,
    paddingTop: 8 * vh,
    fontWeight: '600',
    marginBottom: 12 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
});

export default styles;
