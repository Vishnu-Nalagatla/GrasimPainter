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
    padding: 50 * vh,
    paddingRight: 30 * vh,
    marginTop: 70 * vh,
    borderRadius: 20 * vh,
  },
  roomName: {
    fontSize: 46 * vh,
    fontFamily: 'karla',
    fontWeight: '700',
    fontStyle: 'normal',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 46 * vh,
    marginBottom: 46 * vh,
  },
  date: {
    fontSize: 38 * vh,
    fontWeight: '600',
  },
  flagIcon: {
    height: 40 * vh,
    width: 40 * vw,
    marginRight: 20 * vw,
  },
  progressWrapper: {
    flexDirection: 'row',
    marginBottom: 36 * vh,
  },
  progressInfo: {
    fontSize: 36 * vh,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.6)',
    paddingBottom: 4 * vh,
  },
  progressPercent: {
    flexDirection: 'row',
  },
  resendView: {
    flexDirection: 'row',
    width: '90%',
  },
  resendInfo: {
    fontSize: 30 * vh,
  },
  infoIcon: {
    height: 50 * vh,
    width: 50 * vw,
    marginRight: 20 * vw,
  },
  activityLabel: {
    fontSize: 40 * vh,
    fontFamily: 'Lato',
    fontWeight: '700',
    fontStyle: 'normal',
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: 50 * vh,
    marginBottom: 30 * vh,
  },
  activityInfo: {
    fontSize: 32 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '500',
    padding: 20 * vh,
    backgroundColor: colors.cardBackground,
    borderRadius: 16 * vh,
    marginBottom: 30 * vh,
  },
  activityProressLabel: {
    fontSize: 40 * vh,
    fontFamily: 'Lato',
    fontWeight: '700',
    fontStyle: 'normal',
    marginBottom: 24 * vh,
  },
  tabView: {
    alignSelf: 'center',
    width: '92%',
    paddingTop: 40 * vh,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 16 * vh,
    borderBottomRightRadius: 16 * vh,
  },
  wallImages: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  wallImg: {
    height: 270 * vh,
    width: 270 * vw,
    marginBottom: 26 * vh,
    borderRadius: 20 * vh,
  },
  navitem: {
    height: 350 * vh,
    width: 270 * vw,
    margin: 30 * vw,
    position: 'relative',
    marginBottom: 40 * vh,
  },
  countIcon: {
    height: 50 * vh,
    width: 50 * vw,
  },
  wallImgCount: {
    position: 'absolute',
    top: 20 * vh,
    left: 20 * vw,
    fontSize: 45 * vh,
    backgroundColor: 'red',
  },
  tabItem: {
    // width: '100%',
  },
  button: {
    borderColor: '#2C4DAE',
    width: '90%',
    borderWidth: 2,
    borderRadius: 20 * vh,
    marginVertical: 40 * vh,
    alignSelf:'center',
  },
  btnTxt: {
    fontSize: 36 * vh,
    fontFamily: 'karla',
    letterSpacing: 0.8,
    fontWeight: '500',
    paddingHorizontal: 16 * vh,
  },
  wallName: {
    textAlign: 'center',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 46 * vh,
  },
});

export default styles;
