import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';

const {vw, vh} = ViewPort;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    height: 100,
    width: '95%',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 16,
  },
  topWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  middleWrapper: {
    paddingBottom: 4,
  },
  statusWrapper: {
    height: 20,
    borderRadius: 8,
    backgroundColor: '#F3D467',
    justifyContent: 'center',
  },

  name: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  status: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#000000',
  },
  statusInfo: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Karla-Bold',
    fontStyle: 'normal',
  },
  date: {
    fontSize: 10,
    paddingLeft: 34,
  },

  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;