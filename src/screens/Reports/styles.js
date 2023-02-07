import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const { vh, vw } = ViewPort;

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
  },
  accordionContainer: {
    flex: 1,
    marginTop: 24 * vh,
    backgroundColor: colors.white,
    borderRadius: 8 * vh,
  },
  heading: {
    fontFamily: 'Lato-Bold',
    fontSize: 16 * vh,
    fontWeight: '700',
    marginTop: 16 * vh,
    marginBottom: 80 * vh,
    color: '#000000',
    opacity: 0.6,
    letterSpacing: 1 * vw,
    paddingLeft: 16 * vw,
  },
  roomName: {
    fontSize: 14 * vh,
    fontFamily: 'Lato-Bold',
    paddingLeft: 50 * vw,
    fontWeight: '700',
    color: '#000000',
    opacity: 0.6,
    letterSpacing: 1 * vw,
  },
  headerContainer: {
    borderRadius: 8 * vh,
    borderColor: '#91A9F9',
    borderWidth: 1 * vh,
    width: '90%',
    height: 56 * vh,
    alignSelf: 'center',
    paddingBottom: 12 * vh,
    flexDirection: 'row',
    padding: 16 * vh,
    marginBottom: 20 * vh,
  },
  activeHeaderContainer: {
    borderTopRightRadius: 8 * vh,
    borderTopLeftRadius: 8 * vh,
    borderColor: '#91A9F9',
    borderWidth: 1 * vh,
    borderBottomWidth: 0,
    width: '90%',
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
    width: '90%',
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
    width: '90%',
    height: 56 * vh,
    alignSelf: 'center',
    paddingBottom: 12 * vh,
    flexDirection: 'row',
    padding: 16 * vh,
    marginBottom: 20 * vh,
  },
  wallDetailsContainer: {
    height: 200 * vh,
    flexDirection: 'column',
    marginBottom: 20 * vh,
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
    borderBottomWidth: 6 * vh,
    width: '90%',
    alignSelf: 'center',
  },
});

export default styles;
