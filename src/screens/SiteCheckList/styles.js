import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.sliderTrack,
    // width: 328 * vw,
  },
  checkList: {
    width: 328 * vw,
    backgroundColor: colors.white,
    marginTop: 16 * vh,
    borderRadius: 8 * vh,
    // padding: 50 * vh,
  },
  item: {
    width: 296 * vw,
    borderBottomColor: '#E7EBF6',
    borderBottomWidth: 1 * vh,
    paddingVertical: 12 * vh,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  itemNoHr: {
    width: 296 * vw,
    paddingVertical: 12 * vh,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  question: {
    // flex: 1,
    width: 236 * vw,
    fontSize: 16 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    marginRight: 24 * vw,
  },
  button: {
    borderColor: '#2C4DAE',
    color: 'red',
    width: 328 * vw,
    borderWidth: 2,
    borderRadius: 8 * vh,
    marginVertical: 16 * vh,
  },
  btnTxt: {
    fontSize: 16 * vh,
    // color: '#2C4DAE',
    letterSpacing: 0.8,
    fontWeight: '500',
    // paddingHorizontal: 16 * vh,
  },

  lable: {
    fontSize: 16 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '700',
    marginTop: 16 * vh,
    letterSpacing: 0.6,
    paddingLeft: 16 * vh,
    paddingBottom: 16 * vh,
  },

});

export default styles;
