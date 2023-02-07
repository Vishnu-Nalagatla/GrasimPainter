import {StyleSheet} from 'react-native';
import ViewPort from '../../../constants/view-port';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    height: 56 * vh,
    width: 360 * vw,
    flexDirection: 'row',
    backgroundColor: '#2C4DAE',
  },
  bellContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  backIcon: {
    height: 50 * vh,
    width: 50 * vw,
  },
  menuImg: {
    height: 24 * vh,
    width: 24 * vw,
  },
  bellIcon: {
    alignItems: 'flex-end',
  },
  bellImg: {
    height: 24 * vh,
    width: 24 * vw,
    marginRight: 16 * vw,
  },
  headerTitle: {
    paddingLeft: 16 * vw,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16 * vh,
    lineHeight: 24 * vh,
    color: 'white',
    marginLeft: 32 * vw,
  },
  toggleDrawerStyle: {
    height: 800 * vh,
    width: 302 * vw,
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
});

export default styles;
