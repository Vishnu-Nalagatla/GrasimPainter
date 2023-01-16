import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // backgroundColor: colors.sliderTrack,
    backgroundColor: 'red',
    height: 500,
    marginTop: 120,
  },
});

export default styles;
