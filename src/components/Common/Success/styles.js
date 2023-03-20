import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import ViewPort from '../../../constants/view-port';

const { vw, vh } = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.sliderTrack,
  },
  doneColor: {
    height: 150 * vh,
    width: 150 * vw,
    marginBottom: 50 * vh,
  },
  message: {
    paddingHorizontal: '10%',
    fontSize: 42 * vh,
    textAlign: 'center',
  },
});

export default styles;