import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // // width: '80%',
    // marginLeft: 50 * vw,
    // alignSelf: 'center',
  },
  thumbTouchSize: {
    width: 40 * vw,
    height: 40 * vh,
  },
});

export default styles;
