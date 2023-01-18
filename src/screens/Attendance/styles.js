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
    width: '90%',
    justifyContent: 'flex-end',
    marginTop: 50 * vh,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leaveRequestlabel: {
    fontSize: 30 * vh,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: 0.6,
    textDecorationLine: 'underline',
    paddingRight: 10 * vh,
  },
  leaveRequestCount: {
    fontSize: 26 * vh,
    color: colors.white,
    fontWeight: '600',
    height: 38 * vh,
    width: 38 * vw,
    borderRadius: 19 * vh,
    backgroundColor: colors.error,
    textAlign: 'center',
  },
  date: {
    marginTop: 120 * vh,
    color: colors.mediumShadeOfBlue,
    fontWeight: '500',
    fontSize: 48 * vh,
    marginBottom: 40 * vh,
  },
  attendance: {
    backgroundColor: colors.lavenderMist,
    padding: 50 * vh,
    borderRadius: 120 * vh,
    borderColor: colors.primary,
    borderWidth: 1,
    flexDirection: 'row',
  },
  attendanceMarked: {
    backgroundColor: colors.lavenderMist,
    padding: 50 * vh,
    borderRadius: 120 * vh,
    borderColor: colors.primary,
    borderWidth: 1,
    flexDirection: 'row',
    opacity: 0.6,
  },
  attendanceLabel: {
    fontSize: 46 * vh,
    color: colors.primary,
    fontWeight: '500',
  },
  flagImg: {
    height: 60 * vh,
    width: 60 * vw,
    marginRight: 20 * vh,
  },
  leavesLabel: {
    width: '90%',
    marginTop: 60 * vh,
    fontSize: 42 * vh,
    color: colors.black,
    textAlign: 'left',
    fontWeight: '500',
    marginBottom: 30 * vh,
  },
  leavesWrapper: {
    width: '100%',
  },
  leaveCard: {
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginBottom: 50 * vh,
    borderRadius: 40 * vh,
    padding: 50 * vh,
  },
  leavesHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  leavesBottom: {},
  approved: {
    fontSize: 40 * vh,
    fontWeight: '500',
    borderRadius: 34 * vh,
    backgroundColor: colors.success,
    color: colors.white,
    padding: 20 * vh,
  },
  declined: {
    fontSize: 40 * vh,
    fontWeight: '500',
    borderRadius: 34 * vh,
    backgroundColor: colors.error,
    color: colors.white,
    padding: 20 * vh,
  },
  duration: {
    fontSize: 46 * vh,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 0.6)',
  },
});

export default styles;
