import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    backgroundColor: colors.sliderTrack,
  },
  materialLeftView: {
    width: 328 * vw,
    marginTop: 20 * vh,
    backgroundColor: colors.white,
    borderRadius: 8 * vh,
    paddingBottom: 40 * vh,
    alignSelf: 'center',
  },
  materialusedView: {
    width: 328 * vw,
    marginTop: 20 * vh,
    backgroundColor: colors.white,
    borderRadius: 8 * vh,
    paddingBottom: 16 * vh,
    marginBottom: 16 * vh,
    alignSelf: 'center',
  },
  cardView: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 0 * vh,
    borderRadius: 8 * vh,
  },
  materialLabel: {
    fontSize: 16 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '700',
    paddingTop: 16 * vh,
    paddingBottom: 20 * vh,
    paddingLeft: 16 * vh,
    alignSelf: 'flex-start',
  },
  materialLabel2: {
    fontSize: 16 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '700',
    paddingTop: 16 * vh,
    paddingLeft: 16 * vh,
    alignSelf: 'flex-start',
  },
  tabView: {
    width: '100%',
    alignItems: 'center',
  },

  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8 * vh,
  },
  name: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  itemView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  materialCard: {
    width: 296 * vw,
    height: 203 * vh,
    marginBottom: 16 * vh,
    borderWidth: 1,
    borderColor: '#91A9F9',
    borderRadius: 8 * vh,
    padding: 16 * vh,
    alignSelf: 'center',
  },
  totalQuantity: {
    fontSize: 14 * vh,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  totalQuantityLabel: {
    fontSize: 16 * vh,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  leftOverWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20 * vh,
    alignItems: 'center',
  },
  leftOverValue: {
    fontSize: 14 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontFamily: 'Karla',
    fontStyle: 'normal',
  },
  leftOverLabel: {
    fontSize: 12 * vh,
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.6)',
  },

  leftOverView: {
    height: 48 * vh,
    width: 86 * vw,
    backgroundColor: '#E7EBF6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8 * vh,
  },
  button: {
    borderColor: '#2C4DAE',
    width: '90%',
    borderWidth: 2,
    borderRadius: 8 * vh,
    marginTop: 18 * vh,
  },
  btnTxt: {
    fontSize: 16 * vh,
    letterSpacing: 0.8,
    fontWeight: '500',
    paddingHorizontal: 16 * vh,
  },
  materialUsedCard: {
    width: 296 * vw,
    flexDirection: 'row',
    height: 42 * vh,
    backgroundColor: '#f5f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 8 * vh,
  },
  materialUsedCardEven: {
    width: 296 * vw,
    flexDirection: 'row',
    height: 42 * vh,
    backgroundColor: '#eef2ff',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 8 * vh,
  },
  usedRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12 * vh,
  },
  rightInfo: {
    flexDirection: 'row',
  },
  oddRow: {
    backgroundColor: '#f5f8ff',
  },
  evenRow: {
    backgroundColor: '#eef2ff',
  },
  cost: {
    paddingRight: 60 * vh,
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  label: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  heading: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    paddingLeft: 16 * vw,
    paddingTop: 24 * vh,
    paddingBottom: 12 * vh,
    letterSpacing: 0.4,
    color: 'color: rgba(0, 0, 0, 0.6)',
  },
});

export default styles;
