import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 360 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.sliderTrack,
  },

  bodyContainer: {
    width: 356 * vw,
    marginLeft: 4 * vw,
    backgroundColor: colors.cardBackground,
  },
  notificationCard: {
    height: 88 * vh,
    width: '100%',
    borderWidth: 1 * vh,
    borderColor: '#DCE3F8',
  },
  notification: {
    flexDirection: 'row',
    padding: 8 * vh,
  },
  notifiaftionLable: {
    width: '90%',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14 * vh,
    paddingRight: 12 * vh,
  },
  time: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10 * vh,
    paddingLeft: 48 * vh,
  },
  notifiaftionImg: {
    height: 24 * vh,
    width: 24 * vw,
    marginRight: 12 * vh,
    marginTop: 10 * vh,
  },
});

export default styles;
