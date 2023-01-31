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
  progressInfo: {
    width: 328 * vw,
    height: 314 * vh,
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginTop: 16 * vh,
    padding: 16 * vh,
    borderRadius: 8 * vh,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24 * vh,
  },
  duration: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24 * vh,
  },
  startDate: {
    flexDirection: 'row',
    fontSize: 12 * vh,
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.6)',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
  },

  endDate: {
    flexDirection: 'row',
    fontSize: 12 * vh,
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.6)',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
  },

  dotted: {
    width: 8 * vw,
    height: 2 * vh,
    backgroundColor: '#949DB6',
    borderRadius: 4 * vh,
  },
  label: {
    fontFamily: 'Lato',
    fontSize: 16 * vh,
    fontWeight: '700',
    fontStyle: 'normal',
  },
  profileIcon: {
    height: 24 * vh,
    width: 24 * vw,
  },
  button: {
    borderColor: '#2C4DAE',
    color: 'red',
    width: '100%',
    borderWidth: 2,
    borderRadius: 8 * vh,
    marginTop: 12 * vh,
  },
  btnTxt: {
    fontSize: 12 * vh,
    letterSpacing: 0.8,
    fontWeight: '500',
    paddingHorizontal: 16 * vh,
  },
  paymentInfo: {
    width: 296 * vw,
    marginTop: 12 * vh,
    height: 34 * vh,
    backgroundColor: '#fff4cc',
    borderRadius: 8 * vh,
    justifyContent: 'center',
  },
  paymentInfoLabel: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12 * vh,
    padding: 8 * vh,
  },
  address: {
    fontSize: 12 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
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
  arrowIcon: {
    height: 18 * vh,
    width: 18 * vw,
    marginRight: 15 * vw,
  },
  // projectConstraintsWrapper

  projectConstraintsWrapper: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 8 * vh,
    justifyContent: 'center',
    marginTop: 16 * vh,
    width: '90%',
    padding: 16 * vh,
  },

  projectConstraintsLabel: {
    fontSize: 16 * vh,
    fontWeight: 'bold',
    marginBottom: 24 * vh,
  },

  constraintInfo: {
    backgroundColor: colors.cardBackground,
    flexDirection: 'row',
  },
  constraintInfoOdd: {
    backgroundColor: colors.carteBlanche,
    flexDirection: 'row',
  },
  constraintKey: {
    flex: 1,
    alignSelf: 'center',
    padding: 12 * vw,
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
  },
  constraintValue: {
    flex: 1,
    padding: 12 * vw,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
  },
  tabView: {
    alignSelf: 'center',
    width: 328 * vw,
    marginTop: 40 * vh,
    marginBottom: 40 * vh,
  },
  navitem: {
    width: 154 * vw,
    height: 48 * vh,
    marginRight: 20 * vh,
    marginBottom: 16 * vh,
    borderRadius: 8 * vh,
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10 * vw,
    alignSelf: 'center',
  },
  itemView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 360 * vw,
  },
  tabItem: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontSize: 16 * vh,
    color: colors.black,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
});

export default styles;
