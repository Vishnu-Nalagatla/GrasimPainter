import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.sliderTrack,
  },
  bodyContainer: {
    flex: 1,
    marginTop: 120 * vh,
    // backgroundColor: colors.white,
    borderRadius: 20 * vh,
  },
  accordionContainer: {
    flex: 1,
    marginTop: 100 * vh,
    backgroundColor: colors.white,
    borderRadius: 20 * vh,
  },
});

export default styles;
