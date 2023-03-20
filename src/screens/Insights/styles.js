import { StyleSheet } from 'react-native';
import ViewPort from '../../constants/view-port';

const { vh, vw } = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  innerContainer: {
    height: 444 * vh,
    width: 328 * vw,
    borderRadius: 15 * vh,
    backgroundColor: '#FFFFFF',
    padding: 16 * vh,
    marginBottom: 10 * vh,
    marginTop: 10 * vh,
    alignSelf: 'center',
  },
  innerContainerHeight: {
    height: 56 * vh,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 24 * vh,
  },
  cardContainer: {
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 16 * vh,
    marginBottom: 10 * vh,
    marginTop: 10 * vh,
    alignSelf: 'center',
  },
  projectName: {
    fontFamily: 'Lato-Bold',
    fontSize: 16 * vh,
    lineHeight: 24 * vh,
    letterSpacing: 0.25 * vw,
    color: '#000000',
    marginRight: 86 * vw,
  },
  projectStatus: {
    fontFamily: 'Karla-Bold',
    fontSize: 12 * vh,
    lineHeight: 16 * vh,
    letterSpacing: 0.25 * vw,
    color: '#FFFFFF',
    height: 18 * vh,
    width: 86 * vw,
    backgroundColor: '#2C4DAE',
    textTransform: 'uppercase',
    borderRadius: 20 * vh,
    marginRight: 20 * vw,
    textAlign: 'center',
    marginTop: 4 * vh,
  },
  expandImgStyle: {
    width: 24 * vw,
    height: 24 * vh,
  },
  card: {
    width: 140 * vw,
    height: 68 * vh,
    borderRadius: 15 * vh,
    backgroundColor: '#F5F8FF',
    paddingHorizontal: 12 * vw,
  },
  longCard: {
    width: 296 * vw,
    height: 68 * vh,
    borderRadius: 15 * vh,
    backgroundColor: '#F5F8FF',
    paddingHorizontal: 12 * vw,
  },
  label: {
    fontFamily: 'Karla-Bold',
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    color: '#000000',
    opacity: 0.6,
    marginTop: 12 * vh,
    marginBottom: 8 * vh,
  },
  value: {
    fontFamily: 'Lato-Bold',
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    color: '#000000',
    letterSpacing: 0.25 * vw,
  },
  insights: {
    marginTop: 10 * vh,
    marginBottom: 10 * vh,
    justifyContent: 'space-between',
  },
});

export default styles;
