import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  assetsContainer: {
    width: 328 * vw,
    padding: 16 * vw,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 24 * vh,
    borderRadius: 15 * vh,
  },
  assetsText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14 * vh,
    lineHeight: 22 * vh,
    letterSpacing: 0.25 * vw,
    color: '#000000',
    opacity: 0.6,
    marginBottom: 24 * vh,
  },
  asset: {
    padding: 12 * vw,
    textAlign: 'center',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
  },
  even: {
    backgroundColor: colors.cardBackground,
    flexDirection: 'row',
  },
  odd: {
    backgroundColor: colors.carteBlanche,
    flexDirection: 'row',
  },
  insuranceContainer: {
    width: 328 * vw,
    padding: 16 * vw,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 24 * vh,
    borderRadius: 15 * vh,
  },
  align: {
    flex: 1,
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
  downLoad: {
    width: 296 * vw,
    height: 72 * vh,
    backgroundColor: colors.cardBackground,
    justifyContent: 'center',
  },
  downLoadText: {
    fontFamily: 'Lato-Bold',
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    letterSpacing: 0.25 * vw,
    color: '#2C4DAE',
    textAlign: 'center',
  },
  claimsContainer: {
    width: 328 * vw,
    padding: 16 * vw,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 24 * vh,
    borderRadius: 15 * vh,
  },
});

export default styles;
