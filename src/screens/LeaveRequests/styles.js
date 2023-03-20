import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sliderTrack,
    paddingTop: 24 * vh,
  },
  leaveCard: {
    width: 328 * vw,
    alignSelf: 'center',
    padding: 16 * vh,
    backgroundColor: colors.white,
    marginBottom: 16 * vh,
    borderRadius: 8 * vh,
  },
  headerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16 * vh,
  },
  profilePic: {
    height: 32 * vh,
    width: 32 * vw,
    borderRadius: 16 * vh,
    marginRight: 16 * vh,
    borderWidth: 1,
  },
  approveIcon: {
    height: 32 * vh,
    width: 32 * vw,
  },
  declineIcon: {
    height: 32 * vh,
    width: 32 * vw,
    // marginRight: 12 * vw,
  },
  name: {
    fontSize: 16 * vh,
    color: colors.black,
    fontWeight: '600',
  },
  rightInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leaveInfo: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  hrLine: {
    borderColor: '#E7EBF6',
    borderBottomWidth: 2 * vh,
    marginVertical: 8 * vh,
  },
  descriptionLabel: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 4 * vh,
  },
  description: {
    fontSize: 16 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  leaveStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  duration: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 8 * vh,
  },
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
});

export default styles;
