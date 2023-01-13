import {StyleSheet} from 'react-native';
import ViewPort from '../../../constants/view-port';

const {vw, vh} = ViewPort;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 16 * vh,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
});

export default styles;
