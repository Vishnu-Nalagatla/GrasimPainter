import {StyleSheet} from 'react-native';

import ViewPort from '../../../constants/view-port';

const {vw, vh} = ViewPort;

const styles = StyleSheet.create({
  popup: {
    width: 360 * vw,
    maxHeight: 365 * vh,
    overflow: 'scroll',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 15 * vh,
    textAlign: 'center',
  },
});

export default styles;
