import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.sliderTrack,
  },
  bodyContainer: {
    width: 328 * vw,
    backgroundColor: colors.white,
    marginTop: 24 * vh,
    borderRadius: 8 * vh,
    padding: 16 * vh,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24 * vh,
  },
  name: {
    fontSize: 16 * vh,
    fontFamily: 'Lato',
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  phoneIcon: {
    height: 24 * vh,
    width: 24 * vw,
  },
  clinetInfo: {
    borderRadius: 8 * vh,
  },
  evenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 42 * vh,
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
  },
  oddRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 42 * vh,
    alignItems: 'center',
    backgroundColor: colors.carteBlanche,
  },
  key: {
    paddingLeft: 12 * vh,
    color: 'rgba(0, 0, 0, 0.6);',
    fontSize: 12 * vh,
    fontWeight: '700',
    fontFamily: 'Lato',
    fontStyle: 'normal',
  },
  value: {
    paddingRight: 42 * vh,
    color: 'rgba(0, 0, 0, 0.6);',
    fontSize: 12 * vh,
    fontWeight: '700',
    fontFamily: 'Lato',
    fontStyle: 'normal',
  },
});

export default styles;
