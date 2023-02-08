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
  bodyContainer: {
    flex: 1,
    marginTop: 22 * vh,
    borderRadius: 20 * vh,
    width: 328 * vw,
  },
  accordionContainer: {
    flex: 1,
    marginTop: 24 * vh,
    backgroundColor: colors.white,
    borderRadius: 8 * vh,
    marginBottom: 20 * vh,
  },
  heading: {
    fontFamily: 'Lato-Bold',
    fontSize: 16 * vh,
    fontWeight: '700',
    marginTop: 16 * vh,
    marginBottom: 24 * vh,
    color: '#000000',
    opacity: 0.6,
    letterSpacing: 1 * vw,
    paddingLeft: 16 * vw,
  },
  roomInfo: {
    fontFamily: 'Lato-Bold',
    fontSize: 16 * vh,
    fontWeight: '700',
    // marginBottom: 16 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    letterSpacing: 1 * vw,
    paddingLeft: 16 * vw,
  },
  roomName: {
    fontSize: 14 * vh,
    fontFamily: 'Lato-Bold',
    paddingLeft: 16 * vw,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.6)',
    letterSpacing: 1 * vw,
  },
  headerContainer: {
    borderRadius: 8 * vh,
    borderColor: '#91A9F9',
    borderWidth: 1 * vh,
    width: 296 * vw,
    height: 56 * vh,
    alignSelf: 'center',
    paddingBottom: 12 * vh,
    flexDirection: 'row',
    padding: 16 * vh,
    marginTop: 20 * vh,
  },
  activeHeaderContainer: {
    borderTopRightRadius: 8 * vh,
    borderTopLeftRadius: 8 * vh,
    borderColor: '#91A9F9',
    borderWidth: 1 * vh,
    borderBottomWidth: 0,
    marginTop: 16 * vh,
    width: 296 * vw,
    height: 56 * vh,
    alignSelf: 'center',
    paddingBottom: 12 * vh,
    flexDirection: 'row',
    padding: 16 * vh,
  },
  activeWallContainer: {
    borderBottomRightRadius: 8 * vh,
    borderBottomLeftRadius: 8 * vh,
    borderColor: '#91A9F9',
    borderWidth: 1 * vh,
    borderTopWidth: 0,
    width: 296 * vw,
    height: 56 * vh,
    alignSelf: 'center',
    paddingBottom: 12 * vh,
    flexDirection: 'row',
    paddingLeft: 16 * vh,
    // backgroundColor: 'red',
  },
  wallContainer: {
    borderRadius: 8 * vh,
    borderColor: '#91A9F9',
    borderWidth: 1 * vh,
    width: 296 * vw,
    height: 56 * vh,
    alignSelf: 'center',
    paddingBottom: 12 * vh,
    flexDirection: 'row',
    padding: 16 * vh,
    marginBottom: 20 * vh,
  },
  wallDetailsContainer: {
    height: 300 * vh,
    flexDirection: 'column',
    // marginBottom: 20 * vh,
  },
  accordionImg: {
    width: 16 * vw,
    height: 16 * vh,
    position: 'absolute',
    right: 16 * vw,
    marginTop: 16 * vh,
  },
  marginStyle: {
    // marginTop: 40 * vh,
  },
  separator: {
    borderBottomColor: '#E7EBF6',
    borderBottomWidth: 2 * vh,
    marginVertical: 16 * vh,
    width: 296 * vw,
    alignSelf: 'center',
  },
  separator2: {
    borderBottomColor: '#E7EBF6',
    borderBottomWidth: 1 * vh,
    marginVertical: 16 * vh,
    marginRight: 16 * vh,
    width: 264 * vw,
    alignSelf: 'center',
    alignItems: 'center',
  },
  paintingSystem: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontSize: 14 * vh,
    fontWeight: '700',
    lineHeight: 22 * vh,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)',
    paddingLeft: 16 * vw,
  },
  infoKey: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontSize: 14 * vh,
    fontWeight: '400',
    lineHeight: 22 * vh,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)',
    paddingLeft: 16 * vw,
    paddingVertical: 6 * vh,
  },
  colorWrapper: {
    flexDirection: 'row',
  },
  extraInfo: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontSize: 10 * vh,
    fontWeight: '400',
    lineHeight: 12 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  extraInfo2: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontSize: 10 * vh,
    fontWeight: '400',
    lineHeight: 12 * vh,
    color: '#A2ABC4',
  },
  wallColor: {
    backgroundColor: '#91A9F9',
    height: 32 * vh,
    width: 32 * vw,
    borderRadius: 16 * vh,
    marginRight: 4 * vw,
  },
  cracksWrapper: {
    flexDirection: 'row',
    width: '25%',
  },
  crackImage: {
    marginLeft: 14 * vw,
    marginRight: 6 * vw,
  },
  cracksInfo: {
    width: '70%',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontSize: 10 * vh,
    fontWeight: '400',
    lineHeight: 12 * vh,
  },

  qcReport: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
