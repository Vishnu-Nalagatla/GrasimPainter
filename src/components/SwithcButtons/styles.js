import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';

const {vw, vh} = ViewPort;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '70%',
    height: 42,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderColor: '#2C4DAE',
    borderWidth: 1,

    // border: 1px solid #2C4DAE;
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    height: 42,
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
    fontSize: 14,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C4DAE',
    borderRadius: 8,
  },
  activeLabel: {
    color: '#FFFFFF',
  },
  label: {
    color: '#000000',
  },
});

export default styles;
