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
  infoWrapper: {
    width: '92%',
    alignSelf: 'center',
    backgroundColor: colors.white,
    padding: 16 * vh,
    paddingRight: 30 * vh,
    marginTop: 24 * vh,
    borderTopLeftRadius: 8 * vh,
    borderTopRightRadius: 8 * vh,
  },
  roomName: {
    fontSize: 16 * vh,
    fontFamily: 'karla',
    fontWeight: '700',
    fontStyle: 'normal',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18 * vh,
    width: '70%',
  },
  date: {
    fontSize: 12 * vh,
    fontFamily: 'karla',
    fontWeight: '700',
    fontStyle: 'normal',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  updatedBy: {
    // marginTop: 10 * vh,
  },
  flagIcon: {
    height: 16 * vh,
    width: 16 * vw,
    marginRight: 8 * vw,
  },
  circularProgress: {},
  leftView: {},
  progressWrapper: {
    flexDirection: 'row',
    marginBottom: 14 * vh,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  progressInfo: {
    fontSize: 12 * vh,
    fontWeight: '700',
    fontStyle: 'normal',
    color: 'rgba(0, 0, 0, 0.6)',
    paddingBottom: 4 * vh,
  },
  progressPercent: {
    flexDirection: 'row',
  },
  resendView: {
    flexDirection: 'row',
    width: '100%',
  },
  resendInfo: {
    fontSize: 10 * vh,
    fontWeight: '400',
    fontStyle: 'normal',
    color: 'rgba(0, 0, 0, 0.6)',
    paddingRight: 16 * vh,
  },
  infoIcon: {
    height: 16 * vh,
    width: 16 * vw,
    marginRight: 8 * vw,
  },
  activityLabel: {
    fontSize: 16 * vh,
    fontFamily: 'Lato',
    fontWeight: '700',
    fontStyle: 'normal',
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: 8 * vh,
    marginBottom: 8 * vh,
  },
  activityInfo: {
    fontSize: 12 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '500',
    padding: 12 * vh,
    backgroundColor: colors.cardBackground,
    borderRadius: 8 * vh,
    marginBottom: 8 * vh,
  },
  activityProressLabel: {
    fontSize: 14 * vh,
    fontFamily: 'Lato',
    fontWeight: '700',
    fontStyle: 'normal',
    marginBottom: 8 * vh,
  },
  tabView: {
    alignSelf: 'center',
    width: '92%',
    paddingTop: 16 * vh,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 16 * vh,
    borderBottomRightRadius: 16 * vh,
    marginBottom: 22 * vh,
  },
  wallImages: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  wallImg: {
    height: 90 * vh,
    width: 90 * vw,
    marginBottom: 8 * vh,
    borderRadius: 8 * vh,
  },
  navitem: {
    height: 90 * vh,
    width: 90 * vw,
    margin: 8 * vw,
    position: 'relative',
    marginBottom: 28 * vh,
  },
  countIcon: {
    height: 12 * vh,
    width: 12 * vw,
  },
  wallImgCount: {
    position: 'absolute',
    top: 4 * vh,
    left: 4 * vw,
    fontSize: 16 * vh,
  },
  retakeView: {
    position: 'absolute',
    top: 20 * vh,
    right: 20 * vw,
    fontSize: 16 * vh,
  },
  tabItem: {
    // width: '100%',
  },
  button: {
    borderColor: '#2C4DAE',
    width: '90%',
    borderWidth: 2,
    borderRadius: 8 * vh,
    marginVertical: 40 * vh,
    alignSelf: 'center',
  },
  btnTxt: {
    fontSize: 16 * vh,
    fontFamily: 'karla',
    letterSpacing: 0.8,
    fontWeight: '700',
    paddingHorizontal: 16 * vh,
  },
  wallName: {
    textAlign: 'center',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16 * vh,
    marginBottom: 10 * vh,
  },
  percentage: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14 * vh,
  },
});

export default styles;
