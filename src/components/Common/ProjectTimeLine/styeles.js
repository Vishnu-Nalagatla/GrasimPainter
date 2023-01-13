import {StyleSheet} from 'react-native';
import ViewPort from '../../../constants/view-port';
// import colors from '../../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 520 * vh,
    alignItems: 'flex-start',
    paddingLeft: 70 * vw,
    paddingRight: 50 * vw,
  },
  projectName: {
    fontSize: 34 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '700',
    paddingTop: 10 * vh,
  },
  header: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    height: 80 * vh,
  },
  ellipse: {
    height: 70 * vh,
    width: 70 * vh,
    marginRight: 20 * vw,
  },
  viewDetailsText: {
    fontSize: 34 * vh,
    color: '#2C4DAE',
    textDecorationLine: 'underline',
    fontWeight: '700',
  },
  leftWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  rightWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  staitLine: {
    backgroundColor: '#D0D7E8',
    height: 460 * vh,
    width: 12 * vw,
    position: 'absolute',
    left: 28 * vw,
    top: 68 * vh,
  },
  projectLine: {
    height: 300 * vh,
    position: 'relative',
  },
  bodyContainer: {
    marginLeft: 90 * vw,
    marginTop: 10 * vh,
    alignItems:'flex-start',
  },
  status: {
    color: '#000000',
    fontSize: 40 * vh,
    fontWeight: '500',
    letterSpacing: 1 * vh,
  },
  date: {
    color: '#000000',
    fontSize: 30 * vh,
    fontWeight: '400',
    letterSpacing: 1 * vh,
    marginTop: 30 * vh,
  },
  button: {
    borderColor: '#2C4DAE',
    color: 'red',
    minWidth: 300 * vw,
    borderWidth: 2,
    borderRadius: 20 * vh,
    marginTop: 40 * vh,
  },
  btnTxt: {
    fontSize: 36 * vh,
    color: '#2C4DAE',
    letterSpacing: 0.8,
    fontWeight: '500',
    paddingHorizontal: 16 * vh,
  },
});

export default styles;
