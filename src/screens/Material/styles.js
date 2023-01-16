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

  materialLeftView: {
    width: '92%',
    marginTop: 40 * vh,
    backgroundColor: colors.white,
    borderRadius: 20 * vh,
    padding: 20 * vh,
    alignItems: 'center',
  },
  materialusedView: {
    width: '92%',
    marginTop: 40 * vh,
    backgroundColor: colors.white,
    borderRadius: 20 * vh,
    marginBottom: 20 * vh,
  },
  materialLabel: {
    fontSize: 42 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '700',
    paddingTop: 34 * vh,
    padding: 20 * vh,
    alignSelf: 'flex-start',
  },
  tabView: {
    width: '100%',
    alignItems: 'center',
  },

  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40 * vh,
  },
  itemView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  materialCard: {
    width: 900 * vw,
    height: 456 * vh,
    marginBottom: 40 * vh,
    borderWidth: 1,
    borderColor: '#91A9F9',
    borderRadius: 32 * vh,
    padding: 40 * vh,
    marginTop: 30 * vh,
  },
  totalQuantity: {
    fontSize: 42 * vh,
    fontWeight: 'bold',
  },
  totalQuantityLabel: {
    fontSize: 42 * vh,
  },
  leftOverWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40 * vh,
    alignItems: 'center',
  },
  leftOverValue: {
    fontSize: 42 * vh,
  },
  leftOverLabel: {
    fontSize: 42 * vh,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.6)',
  },

  leftOverView: {
    height: 180 * vh,
    width: 300 * vw,
    backgroundColor: '#E7EBF6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36 * vh,
  },
  button: {
    borderColor: '#2C4DAE',
    color: 'red',
    width: '100%',
    borderWidth: 2,
    borderRadius: 20 * vh,
    marginTop: 40 * vh,
  },
  btnTxt: {
    fontSize: 46 * vh,
    letterSpacing: 0.8,
    fontWeight: '500',
    paddingHorizontal: 16 * vh,
  },
  
});

export default styles;
