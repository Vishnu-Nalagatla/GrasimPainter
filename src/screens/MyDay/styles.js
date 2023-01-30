import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import ViewPort from '../../constants/view-port';

const {vw, vh} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sliderTrack,
    alignItems: 'center',
    // width: '100%',
  },
  bodyContainer: {
    flex: 1,
    // backgroundColor: colors.white,
    width: 328 * vw,
    alignSelf: 'center',
    borderRadius: 8 * vh,
    marginBottom: 14 * vh,
    paddingTop: 16 * vh,
    margin: 16 * vw,
  },
  body: {
    flex: 1,
    backgroundColor: colors.white,
    width: 328 * vw,
    alignItems: 'center',
    paddingTop: 16 * vh,
    borderRadius: 8 * vh,
  },

  welcomeMessage: {
    backgroundColor: '#dce3f8',
    width: '100%',
    marginBottom: 10 * vh,
    borderRadius: 8,
  },
  welcomeText: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14 * vh,
    lineHeight: 22 * vh,
    padding: 16 * vh,
    color: colors.textColor,
  },
  projectsWrapper: {
    flex: 1,
    width: 328 * vw,
    marginTop: 24 * vh,
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
