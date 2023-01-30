import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sliderTrack,
  },
  projectsCard: {
    backgroundColor: colors.white,
    alignSelf: 'center',
    padding: 12 * vh,
    width: 328 * vw,
    height: 90 * vh,
    marginVertical: 12 * vh,
    borderRadius: 8 * vh,
  },
  projectsWrapper: {
    backgroundColor: colors.sliderTrack,
  },
  headerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  status: {
    backgroundColor: colors.ultraMass,
    borderRadius: 8 * vh,
    paddingHorizontal: 4 * vh,
    paddingVertical: 2 * vh,
    color: colors.black,
    fontSize: 12 * vh,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  name: {
    fontSize: 12 * vh,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.6);',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 30 * vh,
    marginBottom: 10 * vh,
  },
  flagImg: {
    height: 16 * vh,
    width: 16 * vw,
    marginRight: 20 * vh,
  },
  bottomInfo: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 12 * vh,
  },
  date: {
    color: '#949DB6',
    marginLeft: 34 * vh,
  },
  label: {
    fontSize: 12 * vh,
    fontWeight: '600',
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 60 * vh,
    marginLeft: 17 * vw,
  },
});

export default styles;
