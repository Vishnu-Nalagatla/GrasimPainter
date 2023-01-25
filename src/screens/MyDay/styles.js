import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
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
    // backgroundColor: '#FFFFFF',
    width: '90%',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 14,
    paddingTop: 12,
  },
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    alignItems: 'center',
    paddingTop: 50 * vh,
    borderRadius: 8,
  },

  welcomeMessage: {
    backgroundColor: '#dce3f8',
    width: '100%',
    marginTop: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  welcomeText: {
    fontFamily: 'Karla-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 36 * vh,
    lineHeight: 22,
    padding: 16 * vh,
    color: '#1e1e1e',
  },
  projectsWrapper: {
    flex: 1,
    width: '100%',
    marginTop: 30,
  },
  popup: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20 * vh,
  },
  crewContainer:{
    width: '90%',
  },
  headerMessage: {
    width: '100%',
    fontSize: 44 * vh,
    fontWeight: '600',
    textAlign: 'center',
  },
  errorIcon: {
    height: 80 * vh,
    width: 80 * vw,
    alignSelf: 'center',
    paddingVertical: 100 * vh,
  },
  textInfo: {
    fontSize: 34 * vh,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 50 * vh,
  },
  button: {
    backgroundColor: colors.primary,
    width: '90%',
    borderRadius: 20 * vh,
    marginBottom: 100 * vh,
  },
  btnTxt: {
    color: colors.white,
    fontSize: 40 * vh,
    letterSpacing: 0.8,
    fontWeight: '500',
    paddingHorizontal: 16 * vh,
  },
});

export default styles;
