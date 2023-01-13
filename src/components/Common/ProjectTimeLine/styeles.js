import {StyleSheet} from 'react-native';
import ViewPort from '../../../constants/view-port';
// import colors from '../../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    alignItems: 'flex-start',
    paddingLeft: 60 * vw,
    paddingRight: 40 * vw,
  },
  projectName: {
    fontSize: 42 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '700',
  },
  header: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  ellipse: {
    height: 70 * vh,
    width: 70 * vh,
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
});

export default styles;
