import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import ViewPort from '../../constants/view-port';

const { vw, vh } = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sliderTrack,
    paddingHorizontal: 16 * vh,
    // alignItems: 'center',
    // marginBottom: 24 * vh,
  },
  crewContainer: {
    marginTop: 16 * vh,
  },
  labelWrapper: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 16 * vh,
  },
  profilePic: {
    width: 32 * vw,
    height: 32 * vh,
    borderRadius: 16 * vh,
    backgroundColor: 'red',
    marginRight: 12 * vw,
  },
  crewTitle: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16 * vh,
    lineHeight: 24 * vh,
    color: colors.black,
    marginTop: 24 * vh,
    marginBottom: 8 * vh,
  },
  crewMessage: {
    backgroundColor: '#D5DFFF',
    padding: 8 * vh,
    borderRadius: 8 * vh,
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    color: colors.black,
  },
  crewCard: {
    width: 328 * vw,
    minHeight: 94 * vh,
    borderRadius: 8 * vh,
    backgroundColor: colors.white,
    marginBottom: 16 * vh,
    paddingLeft: 16 * vh,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8 * vh,
  },
  employeeName: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  viewProfile: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14 * vh,
    lineHeight: 18 * vh,
    color: colors.primary,
    textDecorationLine: 'underline',
    marginRight: 16 * vh,
  },
  role: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14 * vh,
    lineHeight: 22 * vh,
    paddingTop: 16 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  status: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    lineHeight: 16 * vh,
    marginTop: 16 * vh,
    marginRight: 16 * vh,
    paddingHorizontal: 4 * vw,
    paddingVertical: 2 * vh,
    backgroundColor: '#F3D467',
    color: colors.black,
    borderRadius: 8 * vh,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bodyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  skillsWrapper: {
    flexDirection: 'row',
    marginBottom: 16 * vh,
  },
  skill: {
    paddingHorizontal: 12 * vw,
    paddingVertical: 6 * vh,
    backgroundColor: colors.carteBlanche,
    marginRight: 12 * vw,
    borderRadius: 8 * vh,
    marginTop: 12 * vh,
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    lineHeight: 16 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
});

export default styles;
