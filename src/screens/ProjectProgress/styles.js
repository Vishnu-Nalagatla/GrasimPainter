import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.sliderTrack,
    overflow: 'scroll',
    display: 'flex',
  },
  progressInfo: {
    width: '92%',
    backgroundColor: colors.white,
    marginTop: 50 * vw,
    padding: 40 * vh,
    borderRadius: 20 * vh,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  duration: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40 * vh,
  },
  startDate: {
    flexDirection: 'row',
    fontSize: 20 * vh,
    alignItems: 'center',
  },

  endDate: {
    flexDirection: 'row',
    fontSize: 20 * vh,
    alignItems: 'center',
  },

  dotted: {
    fontSize: 70 * vh,
    fontWeight: '600',
  },
  profileIcon: {
    height: 30,
    width: 30,
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
    fontSize: 36 * vh,
    // color: '#2C4DAE',
    letterSpacing: 0.8,
    fontWeight: '500',
    paddingHorizontal: 16 * vh,
  },
  paymentInfo: {
    width: '100%',
    marginTop: 30 * vh,
    height: 120 * vh,
    backgroundColor: '#fff4cc',
    borderRadius: 20 * vh,
    justifyContent: 'center',
  },
  address: {
    fontSize: 38 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  hrLine: {
    marginTop: 40 * vh,
    borderColor: '#E7EBF6',
    borderWidth: 2 * vh,
    marginBottom: 30 * vh,
  },
  addressinfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  locationIcon: {
    height: 50 * vh,
    width: 50 * vw,
    margin: 30 * vh,
  },

  // projectConstraintsWrapper

  projectConstraintsWrapper: {
    backgroundColor: colors.white,
    borderRadius: 20 * vh,
    justifyContent: 'center',
    marginTop: 50 * vh,
    width: '90%',
    padding: 30 * vh,
  },

  projectConstraintsLabel: {
    fontSize: 50 * vh,
    fontWeight: 'bold',
    marginTop: 25 * vh,
    marginBottom: 50 * vh,
  },

  constraintInfo: {
    backgroundColor: '#F5F8FF',
    flexDirection: 'row',
    height: 140 * vh,
  },
  constraintKey: {
    flex: 1,
    alignSelf: 'center',
    paddingLeft: 50 * vw,
  },
  constraintValue: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
  },
  tabView: {
    width: '92%',
    marginTop: 40 * vh,
  },
  navitem: {
    height: 150 * vh,
    width: 456 * vw,
    margin: 20 * vh,
    borderRadius: 20 * vh,
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingLeft: 26 * vh,
  },
  itemView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tabItem: {
    color: colors.black,
    fontWeight: '500',
  },
});

export default styles;
