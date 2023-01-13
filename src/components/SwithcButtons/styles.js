import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';

const {vw, vh} = ViewPort;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    height: 130 * vh,
    backgroundColor: '#FFFFFF',
    borderRadius: 24 * vw,
    borderColor: '#2C4DAE',
    borderWidth: 1,

    // border: 1px solid #2C4DAE;
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18 * vh,
    height: 130 * vh,
    fontWeight: 500,
    borderRadius: 8,
    color: '#000000',
    backgroundColor: '#FFFFFF',
    borderColor: '#2C4DAE',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  activebutton: {
    flex: 1,
    fontSize: 18 * vh,
    height: 130 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C4DAE',
    borderRadius: 24 * vw,
  },
  activeLabel: {
    color: '#FFFFFF',
  },
  label: {
    color: '#000000',
  },
});

export default styles;
