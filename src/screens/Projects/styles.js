import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: colors.sliderTrack,
  },
  projectsCard: {
    backgroundColor: colors.white,
    alignSelf: 'center',
    padding: 40 * vh,
    width: '90%',
    marginVertical: 40 * vh,
    borderRadius: 20 * vh,
  },
  projectsWrapper: {
    backgroundColor: colors.sliderTrack,
  },
  headerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    backgroundColor: colors.ultraMass,
    borderRadius: 20 * vh,
    paddingHorizontal: 20 * vh,
    paddingVertical: 10 * vh,
    color: colors.black,
    fontSize: 40 * vh,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  name: {
    fontSize: 40 * vh,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.6);',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30 * vh,
    marginBottom: 10 * vh,
  },
  flagImg: {
    height: 60 * vh,
    width: 60 * vw,
    marginRight: 20 * vh,
  },
  bottomInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    color: '#949DB6',
    marginLeft: 80 * vh,
  },
  label: {
    fontSize: 50 * vh,
    fontWeight: '600',
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 60 * vh,
  },
});

export default styles;
