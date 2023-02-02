import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  subContainer: {
    width: 328 * vw,
    backgroundColor: '#FFFFFF',
    borderRadius: 10 * vh,
    alignSelf: 'center',
    padding: 10,
    marginBottom: 16 * vh,
  },
  infoWrapper: {
    width: '92%',
    alignSelf: 'center',
    backgroundColor: colors.white,
  },
  roomName: {
    fontSize: 16 * vh,
    lineHeight: 24 * vh,
    letterSpacing: 0.25 * vw,
    fontFamily: 'Lato-Bold',
    color: 'rgba(0, 0, 0, 0.6)',
    paddingTop: 16 * vh,
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16 * vh,
    marginBottom: 16 * vh,
  },
  date: {
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    fontFamily: 'Karla-Bold',
  },
  flagIcon: {
    height: 16 * vh,
    width: 16 * vw,
    marginRight: 10 * vw,
  },
  progressWrapper: {
    flexDirection: 'row',
    marginBottom: 16 * vh,
  },
  progressInfo: {
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    fontFamily: 'Karla-Bold',
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
    fontSize: 10 * vh,
    fontFamily: 'Karla-Regular',
    lineHeight: 12 * vh,
  },
  infoIcon: {
    height: 16 * vh,
    width: 16 * vw,
    marginRight: 10 * vw,
  },
  activityLabel: {
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    letterSpacing: 0.25 * vw,
    fontFamily: 'Lato-Bold',
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: 10 * vh,
    marginBottom: 10 * vh,
  },
  activityInfo: {
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    letterSpacing: 0.25 * vw,
    color: 'rgba(0, 0, 0, 0.6)',
    fontFamily: 'Lato-Regular',
    padding: 10 * vh,
    backgroundColor: colors.cardBackground,
    borderRadius: 10 * vh,
    marginBottom: 10 * vh,
  },
  activityProressLabel: {
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    letterSpacing: 0.25 * vw,
    fontFamily: 'Lato-Bold',
    marginBottom: 10 * vh,
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
    height: 24 * vh,
    width: 24 * vw,
    marginBottom: 10 * vh,
    borderRadius: 10 * vh,
  },
  navitem: {
    height: 90 * vh,
    width: 90 * vw,
    margin: 10 * vw,
    position: 'relative',
    marginBottom: 10 * vh,
    backgroundColor: '#D5DFFF',
    borderRadius: 10 * vh,
    justifyContent: 'center',
    alignItems: 'center'
  },
  countIcon: {
    height: 24 * vh,
    width: 24 * vw,
  },
  button: {
    backgroundColor: '#2C4DAE',
    borderColor: '#2C4DAE',
    width: 296 * vw,
    height: 42 * vh,
    borderRadius: 10 * vh,
    marginVertical: 10 * vh,
    alignSelf: 'center',
  },
  btnTxt: {
    fontSize: 14 * vh,
    lineHeight: 18 * vh,
    color: '#FFFFFF',
    fontFamily: 'Karla-Bold',
    textAlign: 'center',
  },
  wallName: {
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    letterSpacing: 0.25 * vw,
  },
  updatesLabel: {
    fontFamily: 'Lato-Bold',
    fontSize: 14 * vh,
    lineHeight: 22 * vh,
    letterSpacing: 0.25 * vw,
    color: '#000000',
  },
  historyLabel: {
    fontFamily: 'Karla-Bold',
    fontSize: 14 * vh,
    lineHeight: 18 * vh,
    letterSpacing: 0.25 * vw,
    color: '#2C4DAE',
    textDecorationLine: 'underline',
  },
  updatesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16 * vw,
    paddingVertical: 24 * vh,
  }
});

export default styles;
