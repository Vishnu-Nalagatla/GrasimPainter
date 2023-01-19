import {StyleSheet} from 'react-native';
import ViewPort from '../../constants/view-port';

const {vw, vh} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7ebf6',
    alignItems: 'center',
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '90%',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 14,
    paddingTop: 12,
  },
  welcomeMessage: {
    backgroundColor: '#dce3f8',
    width: '90%',
    marginTop: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  welcomeText: {
    fontFamily: 'Karla-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 40 * vh,
    lineHeight: 22,
    padding: 16 * vh,
    color: '#1e1e1e',
  },
  projectsWrapper: {
    flex: 1,
    width: '100%',
    marginTop: 30,
  },
});

export default styles;
