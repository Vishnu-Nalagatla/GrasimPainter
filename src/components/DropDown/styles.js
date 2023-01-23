import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';

const {vw, vh} = ViewPort;

const styles = StyleSheet.create({
  arrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 8,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  dropDown: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderWidth: 1,
    borderColor: '#dfdfdf',
    maxHeight: 200,
    flexDirection: 'row',
    flex: 1,
  },
  dropDownDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    flexGrow: 1,
    height: 120,
  },
  dropDownBox: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
  },
  dropdownLable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropDownItem: {
    paddingVertical: 8,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#dfdfdf',
    borderBottomWidth: 1,
    paddingHorizontal: 0,
    paddingVertical: 8,
    marginBottom: 10,
  },
  hidden: {
    position: 'relative',
    display: 'none',
    borderWidth: 0,
  },
  dropDownScrollView: {
    width: '100%',
    zIndex: 123,
  },
  noBottomRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  notFound: {
    marginVertical: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
});

export default styles;
