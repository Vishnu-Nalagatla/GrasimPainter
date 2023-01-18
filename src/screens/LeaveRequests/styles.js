import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sliderTrack,
    paddingTop: 60 * vh,
  },
  leaveCard: {
    width: '90%',
    alignSelf: 'center',
    padding: 46 * vh,
    backgroundColor: colors.white,
    marginBottom: 60 * vh,
    borderRadius: 20 * vh,
  },
  headerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30 * vh,
  },
  profilePic: {
    height: 70 * vh,
    width: 70 * vw,
    borderRadius: 35 * vh,
    marginRight: 20 * vh,
    borderWidth: 1,
    borderColor: 'red',
  },
  approveIcon: {
    height: 70 * vh,
    width: 70 * vw,
    marginRight: 50 * vw,
    borderWidth: 1,
    borderColor: 'red',
  },
  declineIcon: {
    height: 70 * vh,
    width: 70 * vw,
    marginRight: 20 * vw,
    borderWidth: 1,
    borderColor: 'red',
  },
  name: {
    fontSize: 46 * vh,
    color: colors.black,
    fontWeight: '600',
  },
  rightInfo: {
    flexDirection: 'row',
  },
  leaveInfo: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 38 * vh,
    fontWeight: '400',
  },
  hrLine: {
    borderColor: '#E7EBF6',
    borderBottomWidth: 2 * vh,
    marginVertical: 28 * vh,
  },
  descriptionLabel: {
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 26 * vh,
    fontSize: 42 * vh,
  },
  description: {
    fontSize: 42 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  leaveStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  duration: {
    fontSize: 44 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '500',
  },
  approved: {
    fontSize: 32 * vh,
    fontWeight: '500',
    borderRadius: 20 * vh,
    backgroundColor: colors.success,
    color: colors.white,
    paddingHorizontal: 14 * vh,
  },
  declined: {
    fontSize: 32 * vh,
    fontWeight: '500',
    borderRadius: 20 * vh,
    backgroundColor: colors.error,
    color: colors.white,
    paddingHorizontal: 14 * vh,
  },
});

export default styles;
