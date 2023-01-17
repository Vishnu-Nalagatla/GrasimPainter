import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.sliderTrack,
  },
  checkList: {
    width: '90%',
    backgroundColor: colors.white,
    marginTop: 50 * vh,
    borderRadius: 20 * vh,
    padding: 50 * vh,
  },
  item: {
    borderBottomColor: '#E7EBF6',
    borderBottomWidth: 3 * vh,
    paddingVertical: 20 * vh,
    flexDirection: 'row',
  },
  question: {
    flex: 1,
    fontSize: 42 * vh,
    marginHorizontal: 24 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  button: {
    borderColor: '#2C4DAE',
    color: 'red',
    width: '90%',
    borderWidth: 2,
    borderRadius: 20 * vh,
    marginTop: 40 * vh,
    marginBottom: 60 * vh,
  },
  btnTxt: {
    fontSize: 36 * vh,
    // color: '#2C4DAE',
    letterSpacing: 0.8,
    fontWeight: '500',
    paddingHorizontal: 16 * vh,
  },

  lable: {
    fontSize: 42 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '700',
    letterSpacing: 0.6,
    paddingLeft: 30 * vh,
    paddingBottom: 50 * vh,
  },

});

export default styles;
