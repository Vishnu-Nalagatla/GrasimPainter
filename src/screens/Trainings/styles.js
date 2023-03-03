
import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  innerContainer: {
    flexDirection: 'row',
    width: 328 * vw,
    height: 88 * vh,
    borderRadius: 8 * vh,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginBottom: 12 * vh,
  },
  container1: {
    width: '70%',
    padding: 16 * vw,
    marginRight: 20 * vw,
  },
  container2: {
    width: '30%',
  },
  name: {
    fontFamily: 'Lato-Bold',
    fontSize: 16 * vh,
    letterSpacing: 0.25 * vw,
    color: '#000000',
    opacity: 0.6,
  },
  duration: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24 * vh,
  },
  startDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  startDateText: {
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
  },
  endDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotted: {
    width: 8 * vw,
    height: 2 * vh,
    backgroundColor: '#949DB6',
    borderRadius: 4 * vh,
  },
  circularProgress: {
    marginRight: 20 * vw,
    marginTop:22 * vh,
  },
  percentage: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14 * vh,
    color: colors.black,
  },
  icon: {
    width: 16 * vw,
    height: 16 * vh,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginVertical: 24 * vh,
  },
});

export default styles;