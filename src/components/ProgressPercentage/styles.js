import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 900 * vw,
  },
  text: {
    position: 'absolute',
    color: colors.white,
    zIndex: 123,
    fontSize: 34 * vh,
    fontWeight: '700',
    textAlign: 'justify',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default styles;
