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
    marginTop: 120 * vh,
    borderRadius: 20 * vh,
  },
  accordionContainer: {
    flex: 1,
    marginTop: 100 * vh,
    backgroundColor: colors.white,
    borderRadius: 20 * vh,
  },
  heading: {
    fontFamily: 'Lato-Bold',
    fontSize: 50 * vh,
    fontWeight: '700',
    marginTop: 50 * vh,
    marginBottom: 80 * vh,
    color: '#000000',
    opacity: 0.6,
    letterSpacing: 1 * vw,
    paddingLeft: 50 * vw,
  },
  roomName: {
    fontSize: 45 * vh,
    fontFamily: 'Lato-Bold',
    paddingLeft: 50 * vw,
    fontWeight: '700',
    color: '#000000',
    opacity: 0.6,
    letterSpacing: 1 * vw,
  },
  wallContainer: {
    borderRadius: 25 * vh,
    borderColor: '#91A9F9',
    borderWidth: 2 * vh,
    width: '90%',
    height: 150 * vh,
    alignSelf: 'center',
    marginBottom: 30 * vh,
    flexDirection: 'row',
    padding: 40 * vh
  },
  wallDetailsContainer: {
    height: 400 * vh,
    flexDirection: 'column'
  },
  accordionImg: {
    width: 70 * vw,
    height: 70 * vh,
    position: 'absolute',
    right: 20 * vw,
    marginTop: 35 * vh,
  },
  marginStyle: {
    marginTop: 40 * vh,
  },
  separator: {
    borderBottomColor: '#E7EBF6',
    borderBottomWidth: 6 * vh,
    width: '90%',
    alignSelf: 'center',
  },
});

export default styles;
