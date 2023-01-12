import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';

const {vw, vh} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7ebf6',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  welcomeMessage: {
    backgroundColor: '#dce3f8',
    width: '90%',
    marginTop: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  welcomeText: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    padding: 16,
    color: '#1e1e1e',
  },
});

export default styles;
