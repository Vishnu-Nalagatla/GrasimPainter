import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  card: {
    width: 328 * vw,
    height: 510 * vh,
    borderRadius: 10 * vh,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 24 * vh,
    paddingHorizontal: 16 * vw,
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
  profileIcon: {
    height: 16 * vh,
    width: 16 * vw,
  },
  hrLine: {
    marginVertical: 16 * vh,
    borderColor: '#E7EBF6',
    borderWidth: 1 * vh,
  },
  addressinfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  locationIcon: {
    height: 24 * vh,
    width: 24 * vw,
    marginRight: 15 * vw,
  },
  address: {
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    width: 259 * vw,
    height: 36 * vh,
  },
  projectWrapper: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20 * vh,
    justifyContent: 'center',
    marginTop: 16 * vh,
    width: 336 * vw,
    padding: 16 * vh,
  },
  even: {
    backgroundColor: colors.cardBackground,
    flexDirection: 'row',
  },
  odd: {
    backgroundColor: colors.carteBlanche,
    flexDirection: 'row',
  },
  key: {
    flex: 1,
    alignSelf: 'center',
    padding: 12 * vw,
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
  },
  value: {
    flex: 1,
    padding: 12 * vw,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
  },
  category: {
    paddingHorizontal: 12 * vw,
    paddingVertical: 6 * vh,
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
  },
  feedback: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    marginTop: 12 * vh,
    paddingHorizontal: 12 * vw,
  },
  column: {
    flexDirection: 'column',
  },
  bottom: {
    marginBottom: 16 * vh,
  },
});

export default styles;

